import { AxiosRequestConfig, } from 'axios';
import vocab from 'i18n';
import store from '../modules/store';
import * as authActions from 'modules/auth/actions';
import * as notificationsActions from 'modules/notifications/actions';


export interface IError {
  errors?: {
    [key: string]: string[];
  };
  error?: {
    code: string;
    fallback_message: string;
    payload: any[];
  };
}

export interface IBackendError {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response: {
    data?: IError;
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

//TODO make it work with the backend
export const handleBackendError = (error: IBackendError) => {
  if (error?.response?.status === 500) {
    store.dispatch(notificationsActions.errorNotification({ text: vocab.get().somethingWentWrong }));
    return;
  }
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
  if ((error?.response?.status === 422) || error?.response?.status === 400) {
    return error?.response.data?.errors
      || error?.response.data?.error;
  }
  return error!.response!.data;
};
