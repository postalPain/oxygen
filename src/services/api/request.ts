import axios from 'axios';
import { BASE_URL } from 'config/apiUrls';
import { getHeaderLanguage } from 'i18n/utils';
import { selectAccessToken, selectAuthData } from 'modules/auth/selectors';
import store from 'modules/store';
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

request.interceptors.request.use(
  (config) => {
    console.log('auth data', selectAuthData(store.getState())); // eslint-disable-line

    const token = selectAccessToken(store.getState());
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