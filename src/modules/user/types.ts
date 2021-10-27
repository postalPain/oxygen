import { IMeta } from 'modules/store/types';

export const enum UserActions {
  USER_GET_INFO = 'USER_GET_INFO',
  USER_SET_INFO = 'USER_SET_INFO',
  VERIFY_EMAIL = 'VERIFY_EMAIL',
}

export interface IUserState {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface IUserGetInfoAction {
  type: UserActions.USER_GET_INFO;
}

export interface IUserSetInfoAction {
  type: UserActions.USER_SET_INFO;
  payload: Partial<IUserState>;
}

export interface IVerifySignUpCodeAction {
  type: UserActions.VERIFY_EMAIL;
  code: string;
  meta?: IMeta;
}

export type TUserAction = IUserGetInfoAction | IUserSetInfoAction;