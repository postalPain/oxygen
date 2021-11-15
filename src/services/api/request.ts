import axios from 'axios';
import apiUrls, { BASE_URL } from 'config/apiUrls';
import { getHeaderLanguage } from 'i18n/utils';
import { setAuthData } from 'modules/auth/actions';
import { selectAuthData } from 'modules/auth/selectors';
import store, { getState } from 'modules/store';
import moment from 'moment';
import api from '.';
import { handleBackendError } from './errors';
import { getUTCOffset } from 'utils/time';

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept-Language': getHeaderLanguage(),
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': 0,
  },
});

interface IHeader {
  name: string;
  value: string;
}

export const addHeader = ({ name, value }: IHeader, callback?: () => void) => {
  request.defaults.headers[name] = value;
  if (callback) callback();
};

export const removeHeader = (headerName: string, callback?: () => void) => {
  delete request.defaults.headers[headerName];
  if (callback) callback();
};

const isTokenValid = (ttl: string) => {
  const ttl_ts = Number(moment.parseZone(ttl).add(getUTCOffset(), 'm').format('x'));
  const now_ts = Number(Date.now());
  return (ttl_ts + 5000) > now_ts;
};

request.interceptors.request.use(
  async (config) => {
    const authData = selectAuthData(getState());
    let token = authData.access_token;
    if ((config.url !== apiUrls.refreshToken) && token && isTokenValid(authData.access_ttl)) {
      if (!isTokenValid(authData.refresh_ttl)) {
        const response = await api.auth.refreshToken({
          refresh_token: authData.refresh_token
        });
        token = response.data.access_token;
        store.dispatch(setAuthData(response.data));
      }
    }
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  (error) => {
    // reportToSentryApiError(error.response);
    return Promise.reject(error.response.data);
  },
);
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // reportToSentryApiError(error.response);
    return Promise.reject(handleBackendError(error));
  },
);

export default request;