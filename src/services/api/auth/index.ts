import apiUrls from 'config/apiUrls';
import { IAuthData } from 'modules/auth/types';
import { IResponse } from '..';
import request from '../request';

export interface ISignUpPayload {
  registration_id: string;
  email: string;
  password: string;
}

const signUp = (data: ISignUpPayload) => request.post(apiUrls.signUp, data);

const signOut = () => request.post(apiUrls.signOut);

interface ISignInBody {
  email: string;
  password: string;
}

const signIn = (body: ISignInBody): Promise<IResponse<IAuthData>> => request.post('login', body);

interface IRefreshTokenBody {
  refresh_token: string;
}

const refreshToken = (body: IRefreshTokenBody): Promise<IResponse<IAuthData>> => request.post(apiUrls.refreshToken, body);

interface IForgotPasswordBody {
  credentials: string;
}

const forgotPassword = (body: IForgotPasswordBody): Promise<IResponse<any>> => request.post('forgot-password', body);

export interface IResetPasswordBody {
  code?: number;
  credentials?: string; // email
  password?: string;
}

const resetPassword = (body: IResetPasswordBody): Promise<IResponse<any>> => request.post('reset-password', body);


const auth = {
  signUp,
  signOut,
  signIn,
  refreshToken,
  forgotPassword,
  resetPassword,
};

export default auth;