import { RootState } from 'modules/store/rootReducer';

export const selectToken = (state: RootState) => state.auth.token;

export const selectSignUpData = (state: RootState) => state.auth.signUpData;

export const selectSignUpErrors = (state: RootState) => state.auth.errors;
