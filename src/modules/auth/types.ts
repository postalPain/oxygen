import { ISignUpPayload } from 'services/api/auth';
import { IError } from 'services/api/errors';
import { IMeta } from '../store/types';

export interface IAuthState {
  authData: IAuthData;
  signUpErrors: ISetSignUpErrorPayload;
  signInError: IError;
  signUpData: ISignUpPayload;
}

export const enum AuthActions {
  SIGN_UP = 'SIGN_UP',
  SET_SIGN_UP_DATA = 'SET_SIGN_UP_DATA',
  SET_SIGN_UP_ERROR = 'SET_SIGN_UP_ERROR',
  SET_AUTH_DATA = 'SET_AUTH_DATA',
  SIGN_IN = 'SIGN_IN',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_OUT = 'SIGN_OUT',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SET_SIGN_IN_ERROR = 'SET_SIGN_IN_ERROR',
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

export interface ISignedInAction {
  type: AuthActions.SIGN_IN_SUCCESS;
  payload: ISignInPayload;
}

export interface ISignOutAction {
  type: AuthActions.SIGN_OUT;
  meta?: IMeta;
}

export interface ISignedOutAction {
  type: AuthActions.SIGN_OUT_SUCCESS;
}

export interface ISetSignInErrorAction {
  type: AuthActions.SET_SIGN_IN_ERROR;
  error: IError;
}

export type TAuthAction = ISignUpAction | ISetSignUpDataAction | ISetAuthDataAction |
ISetSignUpErrorAction | ISignInAction | ISignedInAction | ISignOutAction | ISignedOutAction | ISetSignInErrorAction;
