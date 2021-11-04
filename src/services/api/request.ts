import axios from 'axios';
import apiUrls, { BASE_URL } from 'config/apiUrls';
import { getHeaderLanguage } from 'i18n/utils';
import { setAuthData } from 'modules/auth/actions';
import { selectAuthData } from 'modules/auth/selectors';
import store, { getState } from 'modules/store';
import api from '.';
import { handleBackendError } from './errors';

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept-Language': getHeaderLanguage(),
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

export const ttlExpired = (ttlUTC: string) => {
  const expiration = new Date(ttlUTC);
  const nowUtc = new Date(new Date().toUTCString().substr(0, 25));

  return (expiration.getTime() - nowUtc.getTime()) < 5000; // less then 5 seconds
};

request.interceptors.request.use(
  async (config) => {
    const authData = selectAuthData(getState());
    let token = authData.access_token;
    if ((config.url !== apiUrls.refreshToken) && token && ttlExpired(authData.access_ttl)) {
      if (!ttlExpired(authData.refresh_ttl)) {
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