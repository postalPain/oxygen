import { IUserState, TUserAction, UserActions } from '../types';

export const initialState: IUserState = {
  id: '',
  email: '',
  first_name: '',
  last_name: '',
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
    default:
      return state;
  }
};

export default userReducer;
