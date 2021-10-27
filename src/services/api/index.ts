import axios from 'axios';
import { getHeaderLanguage } from 'i18n/utils';
import apiUrls, { BASE_URL } from 'config/apiUrls';
import { ISignUpPayload } from 'modules/auth/types';
import { handleBackendError } from './errors';


export const request = axios.create({
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

export interface IResponse<T> {
  data: T;
}

interface ISignInBody {
  email: string;
  password: string;
}

const signIn = (body: ISignInBody) => request.post('login', body).then(x => x.data);

const api = {
  userInfo: () => request.get(apiUrls.userInfo),
  signUp: (data: ISignUpPayload) => request.post(apiUrls.signUp, data),
  signOut: () => request.post(apiUrls.signOut),
  signIn,
};

export default api;