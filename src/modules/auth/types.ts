import { IMeta } from '../store/types';

export interface IAuthState {
  token: string | null;
  errorMessage: string | null;
}


export const enum AuthActions {
  SIGN_IN = 'SIGN_IN',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_OUT = 'SIGN_OUT',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  AUTH_ERROR = 'AUTH_ERROR',
}

export interface ISignInPayload {
  email: string;
  password: string;
}

export interface ISignInAction {
  type: AuthActions.SIGN_IN;
  payload: ISignInPayload;
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

export interface ISetAuthErrorAction {
  type: AuthActions.AUTH_ERROR;
  payload: string;
}

export type TAuthAction = ISignInAction | ISignedInAction | ISignOutAction | ISignedOutAction | ISetAuthErrorAction;
