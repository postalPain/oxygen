import axios from 'axios';
import { selectAuthData } from 'modules/auth/selectors';
import store from 'modules/store';
import { handleBackendError } from './errors';
import env from 'env';

const request = axios.create({
  baseURL: env.apiUrl,
  headers: {
    'Accept-Language': env.locale.replace('-', '_'),
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

request.interceptors.request.use(
  (config) => {
    const authData = selectAuthData(store.getState());
    config.headers.Authorization = `Bearer ${authData.access_token}`;

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
