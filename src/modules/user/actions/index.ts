import {
  UserActions,
  IUserState,
  IUserGetInfoAction,
  IUserSetInfoAction,
  IVerifySignUpCodeAction,
  ICheckVerificationAction,
  ISetVerificationStatusAction,
  IUserClearInfoAction,
  IResendVerificationCodeAction,
  ISetUserStatusError,
  VerificationStatuses,
} from 'modules/user/types';
import { IMeta } from 'modules/store/types';
import { IUserInfo } from 'services/api/employees';

export const userGetInfo = (): IUserGetInfoAction => ({
  type: UserActions.USER_GET_INFO,
});

export const userSetInfo = (payload: Partial<IUserInfo>): IUserSetInfoAction => ({
  type: UserActions.USER_SET_INFO,
  payload,
});

export const userClearInfo = (): IUserClearInfoAction => ({
  type: UserActions.USER_CLEAR_INFO,
});

export const verifyEmail = (code: string, onSuccess): IVerifySignUpCodeAction => ({
  type: UserActions.VERIFY_EMAIL,
  code,
  meta: {
    onSuccess
  }
});

export const resendVerificationCode = (email: string, meta?: IMeta): IResendVerificationCodeAction => ({
  type: UserActions.RESEND_VERIFICATION_CODE,
  payload: { email },
  meta,
});

export const checkVerification = (meta?: IMeta): ICheckVerificationAction => ({
  type: UserActions.CHECK_VERIFICATION,
  meta,
});

export const setVerificationStatus = (status: VerificationStatuses): ISetVerificationStatusAction => ({
  type: UserActions.SET_VERIFICATION_STATUS,
  payload: status,
});

export const setStatusError = (statusError: boolean): ISetUserStatusError => ({
  type: UserActions.SET_STATUS_ERROR,
  statusError,
});