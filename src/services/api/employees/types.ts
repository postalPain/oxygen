import { VerificationStatuses } from 'modules/user/types';
import { AxiosResponse } from 'axios';
import { IResponse } from '../types';
import { ITransaction } from 'modules/transactions/types';
import { IPaycycleInfo } from 'modules/withdrawal/types';

export interface IUserInfo {
  email: string;
  first_name: string;
  last_name: string;
  company_name: string;
  iban: string;
  id: number;
  registration_id: string;
  employee_number: string;
  verification_status: VerificationStatuses;
  statusError: boolean;
}

export interface IVerificationResponse {
  verification_status: VerificationStatuses;
}

export interface IBalance {
  earned_wages: number;
  withdrawable_wages: number;
  total_withdrawn_amount: number;
  is_withdraw_paused: boolean;
  cap: number;
  daily_withdrawal_limit: number;
  monthly_limit: number;
}

export type IFeeResponse = {
  fee_value: number;
};

export type TSuggestedValues = number[];

export enum IWithdrawableDefaultTypes {
  minimal = 'minimal',
  maximum = 'maximum',
}

export type IWithdrawableDefault = {
  [type in IWithdrawableDefaultTypes]: number;
};

export interface IEmployeesApi {
  userInfo: () => Promise<IResponse<IUserInfo>>;
  verifyEmail: (code: string) => Promise<void | AxiosResponse>;
  checkVerification: () => Promise<IResponse<IVerificationResponse>>;
  resendVerificationCode: (email: string) => Promise<void | AxiosResponse>;
  getBalance: () => Promise<IResponse<IBalance>>;
  getTransaction: (id: number) => Promise<IResponse<ITransaction>>;
  getTransactions: () => Promise<IResponse<ITransaction[]>>;
  getSuggestedValues: () => Promise<IResponse<TSuggestedValues>>;
  getFee: (amount: any) => Promise<IResponse<IFeeResponse>>;
  withdrawal: (amount: number) => Promise<IResponse<ITransaction>>;
  getWithdrawableDefaults: () => Promise<IResponse<IWithdrawableDefault>>;
  getPaycycleInfo: () => Promise<IResponse<IPaycycleInfo>>;
}
