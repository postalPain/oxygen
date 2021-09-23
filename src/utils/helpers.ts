import { AxiosRequestConfig, } from 'axios';
import vocab from 'i18n';
import store from '../modules/store';
import * as authActions from '../modules/auth/actions';


// TODO when the backend is ready check types of all possible errors
export interface IUserError {
  code: string;
  fallback_message: string;
  payload: {};
}

export interface IValidationError {
  fields: string[],
  messages: string,
}

export interface IBackendError {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response: {
    data?: IValidationError | IUserError;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;
  },
  isAxiosError: boolean;
  toJSON: () => object;
  name: string;
  message: string;
  stack?: string;
}

export const handleBackendError = (error: IBackendError) => {
  if (error?.response?.status === 401) {
    store.dispatch(authActions.signedOut());
    return {
      message: vocab.get().unauthorized,
    }
  }
  if (!error.response && error.message === 'Network Error') {
    return {
      message: vocab.get().networkError,
    };
  }
  return error!.response!.data;
};
