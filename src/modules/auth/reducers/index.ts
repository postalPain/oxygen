import { IAuthState, TAuthAction, AuthActions } from '../types';

export const initialState: IAuthState = {
  token: null,
  errorMessage: null,
};

const authReducer = (
  state = initialState,
  action: TAuthAction,
): IAuthState => {
  switch (action.type) {
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
    case AuthActions.AUTH_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
