import { VerificationStatuses } from 'modules/user/types';
import { AxiosResponse } from 'axios';
import { IResponse } from '../types';
import { ITransaction } from 'modules/transactions/types';
import { IPaycycleInfo } from 'modules/withdrawal/types';
import { TLangMessage } from 'i18n/utils';

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
  company_id: number;
  transaction_all_time_count_value: number;
  transaction_all_time_count: number;
  transaction_all_time_count_service_charge: number;
  is_first_visit: boolean | null;
  work_permit_number: string;
  company_is_activated: boolean;
  company_deactivated_message?: TLangMessage;
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

type translationValues = Record<string, string>;

export interface ISurveyQuestionResponse {
  id: number;
  status: string;
  name: string;
  type: 'text' | 'rating' | 'radio';
  condition_start_time: string | null;
  condition_end_time: string | null;
  condition_number_of_transactions: string | null;
  details: {
    title: translationValues;
    placeholder?: translationValues;
    min_label?: translationValues;
    max_label?: translationValues;
    options?: {
      text: translationValues;
      value: string;
    }[];
  };
}

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
  getSurveys: () => Promise<IResponse<ISurveyQuestionResponse[]>>;
  submitSurvey: (id: number, answer: string) => Promise<void>;
}
