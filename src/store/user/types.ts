export const enum UserActions {
  USER_GET_INFO = 'USER_GET_INFO',
  USER_SET_INFO = 'USER_SET_INFO',
}

export interface IUserState {
  id: string;
  email: string;
  first_name: string;
  last_name?: string;
}

export interface IUserInfoPayload {
  id: string;
  email: string;
  first_name: string;
  last_name?: string;
}

export interface IUserGetInfoAction {
  type: UserActions.USER_GET_INFO,
}

export interface IUserSetInfoAction {
  type: UserActions.USER_SET_INFO,
  payload: Partial<IUserInfoPayload>;
}

export type TUserAction = IUserGetInfoAction | IUserSetInfoAction;