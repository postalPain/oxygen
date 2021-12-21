import axios from 'axios';
import moment from 'moment';
import apiUrls from 'config/apiUrls';
import { selectAuthData } from 'modules/auth/selectors';
import store, { getState } from 'modules/store';
import { setAuthData } from 'modules/auth/actions';
import { getHeaderLanguage } from 'i18n/utils';
import { isTtlActive } from 'utils/time';
import api from '.';
import { handleBackendError } from './errors';
import env from 'env';


const request = axios.create({
  baseURL: env.apiUrl,
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

request.interceptors.request.use(
  async (config) => {
    const authData = selectAuthData(getState());
    if ((config.url !== apiUrls.refreshToken) && authData.access_token && !isTtlActive(authData.access_ttl)) {
      if (isTtlActive(authData.refresh_ttl)) {
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