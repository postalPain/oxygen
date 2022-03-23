import apiUrls from 'config/apiUrls';
import { ITransaction } from 'modules/transactions/types';
import { IPaycycleInfo } from 'modules/withdrawal/types';
import request from '../request';
import { IResponse } from '../types';
import {
  IBalance,
  IEmployeesApi,
  IUserInfo,
  IVerificationResponse,
  IWithdrawableDefault, IFeeResponse,
  TSuggestedValues
} from './types';

const userInfo = (): Promise<IResponse<IUserInfo>> => request.get(apiUrls.userInfo) ;

const verifyEmail = (code: string) => request.post(apiUrls.verifyEmail, { code });

const checkVerification = (): Promise<IResponse<IVerificationResponse>> => request.get(apiUrls.checkVerification);

const resendVerificationCode = (email: string) => request.post(apiUrls.resendVerificationCode, { email });

const getBalance = (): Promise<IResponse<IBalance>> => request.get('employees/balance');

const getTransactions = () => request.get(apiUrls.getTransactions);

const getSuggestedValues = (): Promise<IResponse<TSuggestedValues>> => request.get('employees/withdraw/suggested-values');

const getFee = (amount): Promise<IResponse<IFeeResponse>> => request.get(`employees/transactions/fee?amount=${amount}`);

const withdrawal = (amount: number): Promise<IResponse<ITransaction>> => request.post('employees/transactions', { amount });

const getWithdrawableDefaults = (): Promise<IResponse<IWithdrawableDefault>> => request.get('employees/withdraw/defaults');

const getPaycycleInfo = (): Promise<IResponse<IPaycycleInfo>> => request.get('employees/pay-cycle-period');

const employees: IEmployeesApi = {
  verifyEmail,
  checkVerification,
  userInfo,
  resendVerificationCode,
  getBalance,
  getTransactions,
  getSuggestedValues,
  getFee,
  withdrawal,
  getWithdrawableDefaults,
  getPaycycleInfo,
};

export default employees;
