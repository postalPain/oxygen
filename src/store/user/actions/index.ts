import {
  UserActions,
  IUserInfoPayload,
  IUserGetInfoAction,
  IUserSetInfoAction
} from 'store/user/types';

export const userGetInfo = (): IUserGetInfoAction => ({
  type: UserActions.USER_GET_INFO,
});

export const userSetInfo = (payload: Partial<IUserInfoPayload>): IUserSetInfoAction => ({
  type: UserActions.USER_SET_INFO,
  payload,
});