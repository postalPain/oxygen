import { AxiosRequestConfig } from "axios";
import vocab from 'i18n';
import store from 'modules/store';
import * as authActions from 'modules/auth/actions';
import * as notificationsActions from 'modules/notifications/actions';

export interface IBeErrors {
  [key: string]: string[];
};

export interface IBeError {
  code: string;
  fallback_message: string;
  payload: any[];
}

export interface IError extends IBeError {
  errors?: IBeErrors;
}

export interface IErrorResponse<T> {
  error: T;
}

export interface IAxiosError {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response: {
    data?: {
      // different BE frameworks
      errors?: IBeErrors;
      error?: IBeError;
    };
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;
  };
  isAxiosError: boolean;
  toJSON: () => object;
  name: string;
  message: string;
  stack?: string;
}

// TODO make it work with the backend
export const handleBackendError = (error: IAxiosError) => {
  if (error?.response?.status === 500) {
    store.dispatch(notificationsActions.errorNotification({ text: vocab.get().somethingWentWrong }));
    return;
  }
  if (error?.response?.status === 401) {
    store.dispatch(authActions.signedOut());
    return {
      message: vocab.get().unauthorized,
    };
  }
  if (!error.response && error.message === 'Network Error') {
    return {
      message: vocab.get().networkError,
    };
  }
  if ((error?.response?.status === 422) || error?.response?.status === 400) {
    let typedError;

    if (error?.response.data?.error) {
      typedError = error.response.data.error;
    } else if (error?.response.data?.errors) {
      typedError = {
        code: '',
        fallback_message: vocab.get().somethingWentWrong,
        payload: [],
        errors: error?.response.data?.errors
      };
    }
    return typedError;
  }
  return error!.response!.data;
};
