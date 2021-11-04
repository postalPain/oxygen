import apiUrls from 'config/apiUrls';
import { TVerificationStatus } from 'modules/user/types';
import { IResponse } from '..';
import request from '../request';

interface IUserInfo {
  email: string;
  iban: string;
  id: number;
  registration_id: string;
  verification_status: TVerificationStatus;
}
const userInfo = (): Promise<IResponse<IUserInfo>> => request.get(apiUrls.userInfo) ;

const verifyEmail = (code: string) => request.post(apiUrls.verifyEmail, { code });

const checkVerification = () => request.get(apiUrls.checkVerification);

const resendVerificationCode = (email: string) => request.post(apiUrls.resendVerificationCode, { email });

const employees = {
  verifyEmail,
  checkVerification,
  userInfo,
  resendVerificationCode,
};

export default employees;