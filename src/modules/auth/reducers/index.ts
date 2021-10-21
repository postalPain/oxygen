import { IAuthState, TAuthAction, AuthActions } from '../types';

export const defaultSignUpErrors = {
  registration_id: null,
  email: null,
  password: null,
}

export const initialState: IAuthState = {
  token: null,
  errors: defaultSignUpErrors,
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
      }
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
    case AuthActions.SET_SIGN_UP_ERROR: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
