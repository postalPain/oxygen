import { IUserState, TUserAction, UserActions } from '../types';

export const initialState: IUserState = {
  id: '',
  email: '',
  first_name: '',
  last_name: '',
  verification_status: null,
};

const userReducer = (
  state = initialState,
  action: TUserAction,
): IUserState => {
  switch (action.type) {
    case UserActions.USER_SET_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case UserActions.SET_VERIFICATION_STATUS: {
      return {
        ...state,
        verification_status: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
