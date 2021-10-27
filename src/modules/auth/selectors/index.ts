import { RootState } from 'modules/store/rootReducer';

export const selectSignUpData = (state: RootState) => state.auth.signUpData;

export const selectSignUpErrors = (state: RootState) => state.auth.signUpErrors;

export const selectAuthData = (state: RootState) => state.auth.authData;

export const selectSignInError = (state: RootState) => state.auth.signInError;
