import { AxiosRequestConfig, } from 'axios';
import vocab from 'i18n';


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
    return { message: vocab.get().somethingWentWrong };
  }
  if (error?.response?.status === 401) {
    return { message: vocab.get().unauthorized, }
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
