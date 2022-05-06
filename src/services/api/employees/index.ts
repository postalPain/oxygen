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
  TSuggestedValues, ISurveyQuestionResponse
} from './types';

const userInfo = (): Promise<IResponse<IUserInfo>> => request.get(apiUrls.userInfo) ;

const verifyEmail = (code: string) => request.post(apiUrls.verifyEmail, { code });

const checkVerification = (): Promise<IResponse<IVerificationResponse>> => request.get(apiUrls.checkVerification);

const resendVerificationCode = (email: string) => request.post(apiUrls.resendVerificationCode, { email });

const getBalance = (): Promise<IResponse<IBalance>> => request.get('employees/balance');

const getTransaction = (id: number): Promise<IResponse<ITransaction>> => request.get(`/employees/transactions/${id}`);

const getTransactions = () => request.get(apiUrls.getTransactions);

const getSuggestedValues = (): Promise<IResponse<TSuggestedValues>> => request.get('employees/withdraw/suggested-values');

const getFee = (amount): Promise<IResponse<IFeeResponse>> => request.get(`employees/transactions/fee?amount=${amount}`);

const withdrawal = (amount: number): Promise<IResponse<ITransaction>> => request.post('employees/transactions', { amount });

const getWithdrawableDefaults = (): Promise<IResponse<IWithdrawableDefault>> => request.get('employees/withdraw/defaults');

const getPaycycleInfo = (): Promise<IResponse<IPaycycleInfo>> => request.get('employees/pay-cycle-period');

const getSurveys = (): Promise<IResponse<ISurveyQuestionResponse[]>> => request.get('employees/surveys');

const submitSurvey = (id: number, answer: string): Promise<void> =>
  request.post(`employees/surveys/${id}`, { answer });

const employees: IEmployeesApi = {
  verifyEmail,
  checkVerification,
  userInfo,
  resendVerificationCode,
  getBalance,
  getTransaction,
  getTransactions,
  getSuggestedValues,
  getFee,
  withdrawal,
  getWithdrawableDefaults,
  getPaycycleInfo,
  getSurveys,
  submitSurvey,
};

export default employees;
