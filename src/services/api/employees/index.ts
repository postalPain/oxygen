import apiUrls from 'config/apiUrls';
import { ITransaction } from 'modules/transactions/types';
import { VerificationStatuses } from 'modules/user/types';
import { IResponse } from '..';
import request from '../request';

export interface IUserInfo {
  email: string;
  first_name: string;
  last_name: string;
  iban: string;
  id: number;
  registration_id: string;
  verification_status: VerificationStatuses;
  statusError: boolean;
}
const userInfo = (): Promise<IResponse<IUserInfo>> => request.get(apiUrls.userInfo) ;

const verifyEmail = (code: string) => request.post(apiUrls.verifyEmail, { code });

export interface IVerificationResponse {
  verification_status: VerificationStatuses;
}

const checkVerification = (): Promise<IResponse<IVerificationResponse>> => request.get(apiUrls.checkVerification);

const resendVerificationCode = (email: string) => request.post(apiUrls.resendVerificationCode, { email });

export interface IBalance {
  earned_wages: number;
  withdrawable_wages: number;
  total_withdrawn_amount: number;
  is_withdraw_paused: boolean;
}

const getBalance = (): Promise<IResponse<IBalance>> => request.get('employees/balance');

const getTransactions = () => request.get(apiUrls.getTransactions);

export type TSuggestedValues = number[];

const getSuggestedValues = (): Promise<IResponse<TSuggestedValues>> => request.get('employees/withdraw/suggested-values');

export type TFee = number;

const getFee = (amount): Promise<IResponse<TFee>> => request.get(`employees/transactions/fee?amount=${amount}`);

const withdrawal = (amount: number): Promise<IResponse<ITransaction>> => request.post('employees/transactions', { amount });

export enum IWithdrawableDefaultTypes {
  minimal = 'minimal'
}

export interface IWithdrawableDefault {
  amount: number;
  type: IWithdrawableDefaultTypes;
}

const getMinWithdrawable = (): Promise<IResponse<IWithdrawableDefault[]>> => request.get('employees/withdraw/defaults');

const employees = {
  verifyEmail,
  checkVerification,
  userInfo,
  resendVerificationCode,
  getBalance,
  getTransactions,
  getSuggestedValues,
  getFee,
  withdrawal,
  getMinWithdrawable,
};

export default employees;