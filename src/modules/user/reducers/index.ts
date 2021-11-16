import { IUserInfo } from 'services/api/employees';
import { TUserAction, UserActions } from '../types';

export const userDefaultState: IUserInfo = {
  id: null,
  email: '',
  first_name: '',
  last_name: '',
  iban: '',
  registration_id: '',
  verification_status: null,
};

const userReducer = (
  state = userDefaultState,
  action: TUserAction,
): IUserInfo => {
  switch (action.type) {
    case UserActions.USER_SET_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case UserActions.USER_CLEAR_INFO:
      return userDefaultState;
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
