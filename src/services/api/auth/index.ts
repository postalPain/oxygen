import apiUrls from 'config/apiUrls';
import { IAuthData } from 'modules/auth/types';
import request from '../request';
import {
  IAuthApi,
  IForgotPasswordBody,
  IRefreshTokenBody,
  IResetPasswordBody,
  ISignInBody,
  ISignUpPayload
} from './types';
import { IResponse } from '../types';

const signUp = (data: ISignUpPayload) => request.post(apiUrls.signUp, data);

const signOut = () => request.post(apiUrls.signOut);

const signIn = (body: ISignInBody): Promise<IResponse<IAuthData>> => request.post('login', body);

const refreshToken = (body: IRefreshTokenBody): Promise<IResponse<IAuthData>> => request.post(apiUrls.refreshToken, body);

const forgotPassword = (body: IForgotPasswordBody): Promise<IResponse<any>> => request.post('forgot-password', body);

const resetPassword = (body: IResetPasswordBody): Promise<IResponse<any>> => request.post('reset-password', body);

const auth: IAuthApi = {
  signUp,
  signIn,
  signOut,
  refreshToken,
  forgotPassword,
  resetPassword,
};

export default auth;
