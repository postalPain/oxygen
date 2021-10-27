import { IAuthState, TAuthAction, AuthActions } from '../types';

export const defaultSignUpErrors = {
  registration_id: null,
  email: null,
  password: null,
};

const defaultAuthData = {
  access_token: '',
  access_ttl: '',
  refresh_token: '',
  refresh_ttl: '',
};

export const initialState: IAuthState = {
  authData: defaultAuthData,
  signUpErrors: defaultSignUpErrors,
  signInError: null,
  signUpData: {
    registration_id: '',
    email: '',
    password: '',
  },
};

const authReducer = (
  state = initialState,
  action: TAuthAction,
): IAuthState => {
  switch (action.type) {
    case AuthActions.SET_SIGN_UP_DATA: {
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          ...action.payload,
        }
      };
    }
    case AuthActions.SET_AUTH_DATA: {
      return {
        ...state,
        authData: action.payload,
      };
    }
    case AuthActions.SET_SIGN_UP_ERROR: {
      return {
        ...state,
        signUpErrors: action.payload,
      };
    }
    case AuthActions.SET_SIGN_IN_ERROR: {
      return {
        ...state,
        signInError: action.error,
      };
    }
    case AuthActions.SIGN_IN_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case AuthActions.SIGN_OUT_SUCCESS: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
