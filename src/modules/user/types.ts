import { IMeta } from 'modules/store/types';

export const enum UserActions {
  USER_GET_INFO = 'USER_GET_INFO',
  USER_SET_INFO = 'USER_SET_INFO',
  USER_CLEAR_INFO = 'USER_CLEAR_INFO',
  VERIFY_EMAIL = 'VERIFY_EMAIL',
  RESEND_VERIFICATION_CODE = 'RESEND_VERIFICATION_CODE',
  CHECK_VERIFICATION = 'CHECK_VERIFICATION',
  SET_VERIFICATION_STATUS = 'SET_VERIFICATION_STATUS',
}

export interface IUserState {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  verification_status: TVerificationStatus;
}

export interface IUserGetInfoAction {
  type: UserActions.USER_GET_INFO;
}

export interface IUserSetInfoAction {
  type: UserActions.USER_SET_INFO;
  payload: Partial<IUserState>;
}

export interface IUserClearInfoAction {
  type: UserActions.USER_CLEAR_INFO;
}

export interface IVerifySignUpCodeAction {
  type: UserActions.VERIFY_EMAIL;
  code: string;
  meta?: IMeta;
}

export interface IResendVerificationCodeAction {
  type: UserActions.RESEND_VERIFICATION_CODE;
  payload: {
    email: string;
  };
  meta?: IMeta;
}

export interface ICheckVerificationAction {
  type: UserActions.CHECK_VERIFICATION;
  meta: IMeta;
}

export interface ISetVerificationStatusAction {
  type: UserActions.SET_VERIFICATION_STATUS;
  payload: TVerificationStatus;
}

export enum VerificationStatuses {
  new = 'new',
  email_verified = 'email_verified',
  employer_verified = 'employer_verified',
  employer_not_verified = 'employer_not_verified',
  activated_no_beneficiary = 'activated_no_beneficiary',
  activated = 'activated',
  blocked = 'blocked',
  deactivated = 'deactivated',
}

export type TVerificationStatus = keyof typeof VerificationStatuses;

export type TUserAction = IUserGetInfoAction | IUserSetInfoAction
| IUserClearInfoAction | ICheckVerificationAction
| ISetVerificationStatusAction | IResendVerificationCodeAction;