import axios from 'axios';
import { API_URL } from '@env';
import moment from 'moment';
import apiUrls from 'config/apiUrls';
import { selectAuthData } from 'modules/auth/selectors';
import store, { getState } from 'modules/store';
import { setAuthData } from 'modules/auth/actions';
import { getHeaderLanguage } from 'i18n/utils';
import { getUTCOffset } from 'utils/time';
import api from '.';
import { handleBackendError } from './errors';


const request = axios.create({
  baseURL: API_URL,
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

export const setAuthHeader = (access_token) => addHeader({
  name: 'Authorization',
  value: `Bearer ${access_token}`,
});

const isTokenValid = (ttl: string) => {
  const ttl_ts = Number(moment.parseZone(ttl).add(getUTCOffset(), 'm').format('x'));
  const now_ts = Number(Date.now());
  return (ttl_ts + 5000) > now_ts;
};

request.interceptors.request.use(
  async (config) => {
    const authData = selectAuthData(getState());
    if ((config.url !== apiUrls.refreshToken) && authData.access_token && !isTokenValid(authData.access_ttl)) {
      if (isTokenValid(authData.refresh_ttl)) {
        const response = await api.auth.refreshToken({
          refresh_token: authData.refresh_token
        });
        config.headers.Authorization = `Bearer ${response.data.access_token}`; // For current request, next request will use new header
        store.dispatch(setAuthData(response.data));
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response.data);
  },
);
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(handleBackendError(error));
  },
);

export default request;