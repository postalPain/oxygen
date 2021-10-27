import {
  UserActions,
  IUserState,
  IUserGetInfoAction,
  IUserSetInfoAction,
  IVerifySignUpCodeAction,
} from 'modules/user/types';

export const userGetInfo = (): IUserGetInfoAction => ({
  type: UserActions.USER_GET_INFO,
});

export const userSetInfo = (payload: Partial<IUserState>): IUserSetInfoAction => ({
  type: UserActions.USER_SET_INFO,
  payload,
});

export const verifyEmail = (code: string, onSuccess): IVerifySignUpCodeAction => ({
  type: UserActions.VERIFY_EMAIL,
  code,
  meta: {
    onSuccess
  }
});