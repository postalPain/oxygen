import {
  AuthActions,
  ISignUpAction,
  ISetAuthDataAction,
  ISetSignUpDataAction,
  ISignInPayload,
  ISetSignUpErrorAction,
  ISetSignUpErrorPayload,
  ISignedInAction,
  ISignedOutAction,
  IAuthData,
  ISignInAction,
  ISetSignInErrorAction,
  ISignOutAction,
} from 'modules/auth/types';
import { IMeta } from 'modules/store/types';
import { ISignUpPayload } from 'services/api/auth';
import { IError } from 'services/api/errors';

export const signUp = (payload: ISignUpPayload, meta?: IMeta): ISignUpAction => ({
  type: AuthActions.SIGN_UP,
  payload,
  meta,
});

export const setSignUpData = (payload: Partial<ISignUpPayload>): ISetSignUpDataAction => ({
  type: AuthActions.SET_SIGN_UP_DATA,
  payload,
});

export const setSignUpError = (payload: ISetSignUpErrorPayload): ISetSignUpErrorAction => ({
  type: AuthActions.SET_SIGN_UP_ERROR,
  payload,
});

export const setAuthData = (payload: IAuthData): ISetAuthDataAction => ({
  type: AuthActions.SET_AUTH_DATA,
  payload,
});

export const signIn = (email: string, password: string): ISignInAction => ({
  type: AuthActions.SIGN_IN,
  email,
  password,
});

export const signedIn = (payload: ISignInPayload): ISignedInAction => ({
  payload,
  type: AuthActions.SIGN_IN_SUCCESS,
});

export const signOut = (): ISignOutAction => ({
  type: AuthActions.SIGN_OUT,
});

export const signedOut = (): ISignedOutAction => ({
  type: AuthActions.SIGN_OUT_SUCCESS,
});

export const setSignInError = (error: IError): ISetSignInErrorAction => ({
  type: AuthActions.SET_SIGN_IN_ERROR,
  error
});