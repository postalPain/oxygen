import axios from 'axios';
import { getHeaderLanguage } from 'i18n/utils';
import apiUrls, { BASE_URL } from 'config/apiUrls';
import { handleBackendError } from 'utils/helpers';


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
  (config) => config,
  (error) => {
    // reportToSentryApiError(error.response);
    return Promise.reject(error.response.data);
  },
);
request.interceptors.response.use(
  (response) => response,
  (error) => {
    // reportToSentryApiError(error.response);
    return Promise.reject(handleBackendError(error));
  },
);

const api = {
  userInfo: () => request.get(apiUrls.userInfo),
  signOut: () => request.post(apiUrls.signOut),
};

export default api;