import { RootState } from 'modules/store/rootReducer';

export const selectAccessToken = (state: RootState) => state.auth.authData.access_token;

export const selectAccessTokenExpiresAt = (state: RootState) => state.auth.authData.access_ttl;

export const selectRefreshToken = (state: RootState) => state.auth.authData.refresh_token;

export const selectSignUpData = (state: RootState) => state.auth.signUpData;

export const selectSignUpErrors = (state: RootState) => state.auth.signUpErrors;

export const selectAuthData = (state: RootState) => state.auth.authData;

export const selectForgotPassword = (state: RootState) => state.auth.forgotPassword;