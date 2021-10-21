import {
  AuthActions,
  ISignUpPayload,
  ISignUpAction,
  ISetSignUpDataAction,
  ISignInPayload,
  ISignInAction,
  ISignedInAction,
  ISignOutAction,
  ISignedOutAction,
  ISetAuthErrorAction,
  ISetSignUpErrorPayload,
  ISetSignUpErrorAction,
  ISetAuthDataAction,
  ISetAuthDataPayload,
} from 'modules/auth/types';
import { IMeta } from 'modules/store/types';

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

export const setAuthData = (payload: ISetAuthDataPayload): ISetAuthDataAction => ({
  type: AuthActions.SET_AUTH_DATA,
  payload,
});

export const signIn = (payload: ISignInPayload, meta?: IMeta): ISignInAction => ({
  type: AuthActions.SIGN_IN,
  payload,
  meta: meta,
});

export const signedIn = (payload: ISignInPayload): ISignedInAction => ({
  payload,
  type: AuthActions.SIGN_IN_SUCCESS,
});

export const signOut = (meta: IMeta): ISignOutAction => ({
  type: AuthActions.SIGN_OUT,
  meta,
});

export const signedOut = (): ISignedOutAction => ({
  type: AuthActions.SIGN_OUT_SUCCESS,
});

export const setAuthError = (errorMessage: string): ISetAuthErrorAction => ({
  type: AuthActions.AUTH_ERROR,
  payload: errorMessage,
});