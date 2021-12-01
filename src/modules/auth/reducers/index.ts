import { IAuthState, TAuthAction, AuthActions } from '../types';

export const defaultSignUpErrors = {
  registration_id: null,
  email: null,
  password: null,
};

export const defaultAuthData = {
  access_token: '',
  access_ttl: '',
  refresh_token: '',
  refresh_ttl: '',
};
export const defaultSignUpData = {
  registration_id: '',
  email: '',
  password: '',
};

export const authDefaultState: IAuthState = {
  authData: defaultAuthData,
  signUpErrors: defaultSignUpErrors,
  signInError: null,
  signUpData: defaultSignUpData,
  forgotPassword: null,
  signedIn: false,
};

const authReducer = (
  state = authDefaultState,
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
    case AuthActions.CLEAR_SIGN_UP_DATA: {
      return {
        ...state,
        signUpData: defaultSignUpData,
      };
    }
    case AuthActions.SET_AUTH_DATA: {
      return {
        ...state,
        authData: action.payload,
      };
    }
    case AuthActions.CLEAR_AUTH_DATA: {
      return {
        ...state,
        authData: defaultAuthData,
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
    case AuthActions.SET_FORGOT_PASSWORD_EMAIL: {
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          credentials: action.email
        }
      };
    }
    case AuthActions.SET_FORGOT_PASSWORD_CODE: {
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          code: action.code
        }
      };
    }
    case AuthActions.SIGN_OUT_SUCCESS: {
      return {
        ...authDefaultState,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
