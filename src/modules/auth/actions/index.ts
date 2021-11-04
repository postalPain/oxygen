import {
  AuthActions,
  ISignUpAction,
  ISetAuthDataAction,
  IClearAuthDataAction,
  IClearSignUpDataAction,
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
  IForgotPasswordAction,
  ISetForgotPasswordCodeAction,
  IResetPasswordAction,
  ISetForgotPasswordEmailAction,
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

export const clearSignUpData = (): IClearSignUpDataAction => ({
  type: AuthActions.CLEAR_SIGN_UP_DATA,
});

export const setSignUpError = (payload: ISetSignUpErrorPayload): ISetSignUpErrorAction => ({
  type: AuthActions.SET_SIGN_UP_ERROR,
  payload,
});

export const setAuthData = (payload: IAuthData): ISetAuthDataAction => ({
  type: AuthActions.SET_AUTH_DATA,
  payload,
});

export const clearAuthData = (): IClearAuthDataAction => ({
  type: AuthActions.CLEAR_AUTH_DATA,
});

export const signIn = (email: string, password: string): ISignInAction => ({
  type: AuthActions.SIGN_IN,
  email,
  password,
});

export const signedIn = (payload: boolean): ISignedInAction => ({
  payload,
  type: AuthActions.SIGN_IN_SUCCESS,
});

export const signOut = (meta?: IMeta): ISignOutAction => ({
  type: AuthActions.SIGN_OUT,
  meta,
});

export const signedOut = (): ISignedOutAction => ({
  type: AuthActions.SIGN_OUT_SUCCESS,
});

export const setSignInError = (error: IError): ISetSignInErrorAction => ({
  type: AuthActions.SET_SIGN_IN_ERROR,
  error
});

export const forgotPassword = (email: string, meta?: IMeta): IForgotPasswordAction => ({
  type: AuthActions.FORGOT_PASSWORD,
  email,
  meta
});

export const setForgotPasswordEmail = (email: string): ISetForgotPasswordEmailAction => ({
  type: AuthActions.SET_FORGOT_PASSWORD_EMAIL,
  email
});

export const setForgotPasswordCode = (code: number): ISetForgotPasswordCodeAction => ({
  type: AuthActions.SET_FORGOT_PASSWORD_CODE,
  code
});

export const resetPassword = (password: string, meta?: IMeta): IResetPasswordAction => ({
  type: AuthActions.RESET_PASSWORD,
  password,
  meta
});