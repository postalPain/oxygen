import { IMeta } from '../store/types';
import { IResetPasswordBody, ISignUpPayload } from '../../services/api/auth/types';

export interface IAuthState {
  authData: IAuthData;
  signUpErrors: ISetSignUpErrorPayload;
  signUpData: ISignUpPayload;
  signUpCode: string;
  forgotPassword: IResetPasswordBody;
  signedIn: boolean;
}

export const enum AuthActions {
  SIGN_UP = 'SIGN_UP',
  SET_SIGN_UP_DATA = 'SET_SIGN_UP_DATA',
  CLEAR_SIGN_UP_DATA = 'CLEAR_SIGN_UP_DATA',
  SET_SIGN_UP_ERROR = 'SET_SIGN_UP_ERROR',
  SET_SIGN_UP_CODE = 'SET_SIGN_UP_CODE',
  SET_AUTH_DATA = 'SET_AUTH_DATA',
  CLEAR_AUTH_DATA = 'CLEAR_AUTH_DATA',
  SIGN_IN = 'SIGN_IN',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_OUT = 'SIGN_OUT',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  SET_FORGOT_PASSWORD_EMAIL = 'SET_FORGOT_PASSWORD_EMAIL',
  SET_FORGOT_PASSWORD_CODE = 'SET_FORGOT_PASSWORD_CODE',
  RESET_PASSWORD = 'RESET_PASSWORD',
}

export interface ISignUpAction {
  type: AuthActions.SIGN_UP;
  payload: ISignUpPayload;
  meta?: IMeta;
}

export interface ISetSignUpErrorPayload {
  registration_id?: string;
  email?: string;
  password?: string;
}

export interface ISetSignUpErrorAction {
  type: AuthActions.SET_SIGN_UP_ERROR;
  payload: ISetSignUpErrorPayload;
}

export interface ISetSignUpDataAction {
  type: AuthActions.SET_SIGN_UP_DATA;
  payload: Partial<ISignUpPayload>;
}

export interface IClearSignUpDataAction {
  type: AuthActions.CLEAR_SIGN_UP_DATA;
}

export interface ISetSignUpCodeAction {
  type: AuthActions.SET_SIGN_UP_CODE;
  code: string;
}

export interface IAuthData {
  access_token: string;
  access_ttl: string;
  refresh_token: string;
  refresh_ttl: string;
}

export interface ISetAuthDataAction {
  type: AuthActions.SET_AUTH_DATA;
  payload: IAuthData;
}

export interface IClearAuthDataAction {
  type: AuthActions.CLEAR_AUTH_DATA;
  meta?: IMeta;
}

export interface ISignInPayload {
  email: string;
  password: string;
}

export interface ISignInAction {
  type: AuthActions.SIGN_IN;
  email: string;
  password: string;
  meta?: IMeta;
}

export interface ISignInSuccessAction {
  type: AuthActions.SIGN_IN_SUCCESS;
  email: string;
  authData: IAuthData;
  meta?: IMeta;
}

export interface ISignOutAction {
  type: AuthActions.SIGN_OUT;
  meta?: IMeta;
}

export interface ISignedOutAction {
  type: AuthActions.SIGN_OUT_SUCCESS;
}

export interface IForgotPasswordAction {
  type: AuthActions.FORGOT_PASSWORD;
  email: string;
  meta?: IMeta;
}

export interface ISetForgotPasswordEmailAction {
  type: AuthActions.SET_FORGOT_PASSWORD_EMAIL;
  email: string;
  meta?: IMeta;
}

export interface ISetForgotPasswordCodeAction {
  type: AuthActions.SET_FORGOT_PASSWORD_CODE;
  code: number;
}

export interface IResetPasswordAction {
  type: AuthActions.RESET_PASSWORD;
  password: string;
  meta?: IMeta;
}

export type TAuthAction = ISignUpAction | ISetSignUpDataAction | IClearSignUpDataAction | ISetAuthDataAction
| IClearAuthDataAction | ISetSignUpErrorAction | ISetSignUpCodeAction | ISignInAction | ISignOutAction
| ISignedOutAction | ISetForgotPasswordEmailAction | ISetForgotPasswordCodeAction | IResetPasswordAction;
