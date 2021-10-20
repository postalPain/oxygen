import {
  AuthActions,
  ISignUpPayload,
  ISignUpAction,
  ISignedUpPayload,
  ISignedUpAction,
  ISignInPayload,
  ISignInAction,
  ISignedInAction,
  ISignOutAction,
  ISignedOutAction,
  ISetAuthErrorAction,
} from 'modules/auth/types';
import { IMeta } from 'modules/store/types';

// export const signUp = (payload: ISignUpPayload, meta?: IMeta): ISignUpAction => ({
//   type: AuthActions.SIGN_UP,
//   payload,
//   meta: meta,
// });
//
// export const signedUp = (payload: ISignedUpPayload, meta?: IMeta): ISignedUpAction => ({
//   type: AuthActions.SIGNED_UP,
//   payload,
//   meta: meta,
// });

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