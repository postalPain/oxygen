import { IAuthData } from '../../../modules/auth/types';
import { AxiosResponse } from 'axios';
import { IResponse } from '../types';

export interface ISignUpPayload {
  registration_id: string;
  email: string;
  password: string;
}

export interface ISignInBody {
  email: string;
  password: string;
}

export interface IRefreshTokenBody {
  refresh_token: string;
}

export interface IForgotPasswordBody {
  credentials: string;
}

export interface IResetPasswordBody {
  code?: string;
  credentials?: string; // email
  password?: string;
}

export interface IAuthApi {
  signUp: (data: ISignUpPayload) => Promise<IResponse<IAuthData>>;
  signIn: (body: ISignInBody) => Promise<IResponse<IAuthData>>;
  signOut: () => Promise<void | AxiosResponse>;
  refreshToken: (body: IRefreshTokenBody) => Promise<IResponse<IAuthData>>;
  forgotPassword: (body: IForgotPasswordBody) => Promise<IResponse<any>>;
  resetPassword: (body: IResetPasswordBody) => Promise<IResponse<any>>;
}
