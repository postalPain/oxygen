import {
  AuthActions,
  ISignUpAction,
  ISetAuthDataAction,
  IClearAuthDataAction,
  IClearSignUpDataAction,
  ISetSignUpDataAction,
  ISetSignUpErrorAction,
  ISetSignUpErrorPayload,
  ISignedOutAction,
  IAuthData,
  ISignInAction,
  ISignOutAction,
  IForgotPasswordAction,
  ISetForgotPasswordCodeAction,
  IResetPasswordAction,
  ISetForgotPasswordEmailAction,
  ISignInSuccessAction,
  ISetSignUpCodeAction,
} from 'modules/auth/types';
import { IMeta } from 'modules/store/types';
import { ISignUpPayload } from 'services/api/auth/types';

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

export const setSignUpCode = (code: string): ISetSignUpCodeAction => ({
  type: AuthActions.SET_SIGN_UP_CODE,
  code,
});

export const setSignUpCodeLoading = (signUpCodeLoading: boolean) => ({
  type: AuthActions.SET_SIGN_UP_CODE_LOADING,
  signUpCodeLoading,
});

export const signIn = (email: string, password: string, meta?: IMeta): ISignInAction => ({
  type: AuthActions.SIGN_IN,
  email,
  password,
  meta,
});

export const signInSuccess = (email: string, authData: IAuthData, method, meta?: IMeta): ISignInSuccessAction => ({
  type: AuthActions.SIGN_IN_SUCCESS,
  email,
  authData,
  method,
  meta,
});

export const signOut = (meta?: IMeta): ISignOutAction => ({
  type: AuthActions.SIGN_OUT,
  meta,
});

export const signedOut = (): ISignedOutAction => ({
  type: AuthActions.SIGN_OUT_SUCCESS,
});

export const forgotPassword = (email: string, meta?: IMeta): IForgotPasswordAction => ({
  type: AuthActions.FORGOT_PASSWORD,
  email,
  meta
});

export const setForgotPasswordEmail = (email: string, meta?: IMeta): ISetForgotPasswordEmailAction => ({
  type: AuthActions.SET_FORGOT_PASSWORD_EMAIL,
  email,
  meta,
});

export const setForgotPasswordCode = (code: string): ISetForgotPasswordCodeAction => ({
  type: AuthActions.SET_FORGOT_PASSWORD_CODE,
  code
});

export const resetPassword = (password: string, meta?: IMeta): IResetPasswordAction => ({
  type: AuthActions.RESET_PASSWORD,
  password,
  meta
});
