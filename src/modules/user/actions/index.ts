import {
  UserActions,
  IUserState,
  IUserGetInfoAction,
  IUserSetInfoAction,
  IVerifySignUpCodeAction,
  ICheckVerificationAction,
  ISetVerificationStatusAction,
  VerificationStatuses,
} from 'modules/user/types';
import { IMeta } from 'modules/store/types';

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

export const checkVerification = (meta: IMeta): ICheckVerificationAction => ({
  type: UserActions.CHECK_VERIFICATION,
  meta,
});

export const setVerificationStatus = (status: keyof typeof VerificationStatuses): ISetVerificationStatusAction => ({
  type: UserActions.SET_VERIFICATION_STATUS,
  payload: status,
});