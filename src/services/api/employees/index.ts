import apiUrls from 'config/apiUrls';
import { TVerificationStatus } from 'modules/user/types';
import { IResponse } from '..';
import request from '../request';

export interface IUserInfo {
  email: string;
  first_name: string;
  last_name: string;
  iban: string;
  id: number;
  registration_id: string;
  verification_status: TVerificationStatus;
}
const userInfo = (): Promise<IResponse<IUserInfo>> => request.get(apiUrls.userInfo) ;

const verifyEmail = (code: string) => request.post(apiUrls.verifyEmail, { code });

export interface IVerificationResponse {
  verification_status: TVerificationStatus;
}

const checkVerification = (): Promise<IResponse<IVerificationResponse>> => request.get(apiUrls.checkVerification);

const resendVerificationCode = (email: string) => request.post(apiUrls.resendVerificationCode, { email });

const employees = {
  verifyEmail,
  checkVerification,
  userInfo,
  resendVerificationCode,
};

export default employees;