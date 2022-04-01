import { AxiosRequestConfig } from 'axios';
import vocab from 'i18n';
import { getLogger } from 'modules/logger';
import { navigate } from 'navigation';
import { AppScreenNames } from 'navigation/types';


export interface IBeError1 {
  code: string;
  fallback_message: string;
  payload: any[];
}

export interface IBeError2 {
  message: string;
}

export interface IBeValidationError {
  [key: string]: string[];
}

export interface IError {
  code: string;
  message: string;
  error?: IBeError1 | IBeError2 | IBeValidationError;
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
      errors?: IBeValidationError;
      error?: IBeError1;
      message?: string;
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

export const handleBackendError = (error: IAxiosError): IError => {
  getLogger().error('BE Error', error);
  if (error?.response?.status === 500) {
    return {
      code: ERROR_CODES.internalServerError,
      message: vocab.get().internalServerError
    };
  }
  if (error?.response?.status === 401) {
    navigate(AppScreenNames.SignIn); // TODO: If http is refactored this should be moved to Auth saga
    return {
      code: ERROR_CODES.unauthorized,
      message: vocab.get().unauthorized,
    };
  }
  if (!error.response && error.message === 'Network Error') {
    return {
      code: ERROR_CODES.networkError,
      message: vocab.get().networkError,
    };
  }
  if ((error.response?.status === 422) || error.response?.status === 400) {
    let errorFe: IError;

    if (error.response.data?.error) {
      errorFe = {
        message: error.response.data.error.fallback_message,
        code: error.response.data.error.code,
        error: error.response.data.error
      };
    } else if (error.response.data?.errors) {
      errorFe = {
        code: ERROR_CODES.validation,
        message: vocab.get().validationError,
        error: error.response.data.errors
      };
    } else if (error.response.data?.message) {
      errorFe = {
        code: '',
        message: vocab.get().somethingWentWrong,
        error: { message: error.response.data.message } // TODO: I didn't test this type
      };
    }

    return errorFe;
  }
  return {
    code: ERROR_CODES.unknown,
    message: JSON.stringify(error!.response!.data)
  };
};

export enum ERROR_CODES {
  unknown = '_unknown',
  validation = '_validation',
  internalServerError = '_internalServerError',
  unauthorized = '_unauthorized',
  networkError = '_networkError',
}