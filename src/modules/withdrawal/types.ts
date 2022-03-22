import { IMeta } from 'modules/store/types';
import { ITransaction } from 'modules/transactions/types';
import { IBalance, TSuggestedValues, IWithdrawableDefault } from 'services/api/employees/types';
import { WithdrawalOptions, WithdrawalSource } from 'services/analytics/types.ts';

export enum withdrawalActions {
  GET_BALANCE = 'GET_BALANCE',
  SET_BALANCE = 'SET_BALANCE',
  SET_AMOUNT = 'SET_AMOUNT',
  GET_SUGGESTED_VALUES = 'GET_SUGGESTED_VALUES',
  SET_SUGGESTED_VALUES = 'SET_SUGGESTED_VALUES',
  GET_FEE = 'GET_FEE',
  SET_FEE = 'SET_FEE',
  WITHDRAWAL = 'WITHDRAWAL',
  SET_WITHDRAWAL_TRANSACTION = 'SET_WITHDRAWAL_TRANSACTION',
  GET_WITHDRAWABLE_DEFAULTS = 'GET_WITHDRAWABLE_DEFAULTS',
  SET_WITHDRAWABLE_DEFAULTS = 'SET_WITHDRAWABLE_DEFAULTS',
  GET_PAYCYCLE_INFO = 'GET_PAYCYCLE_INFO',
  SET_PAYCYCLE_INFO = 'SET_PAYCYCLE_INFO',
  SET_SOURCE = 'SET_SOURCE',
}

export interface IPaycycleInfo {
  start: string; // yyyy-mm-dd
  end: string; // yyyy-mm-dd
  total_days: number;
  left_days: number;
}

interface ISetAmountPayload {
  amount: number;
  inputSource: WithdrawalOptions;
}

export interface IWithdrawalPayload extends ISetAmountPayload {
  screenSource: WithdrawalSource;
}

export interface IGetBalanceAction {
  type: withdrawalActions.GET_BALANCE;
}

export interface ISetBalanceAction {
  type: withdrawalActions.SET_BALANCE;
  balance: IBalance;
}

export interface ISetAmountAction {
  type: withdrawalActions.SET_AMOUNT;
  payload: ISetAmountPayload;
}

export interface ISetSourceAction {
  type: withdrawalActions.SET_SOURCE;
  payload: WithdrawalSource;
}

export interface ISetSuggestedValuesAction {
  type: withdrawalActions.SET_SUGGESTED_VALUES;
  suggestedValues: TSuggestedValues;
}

export interface ISetFeeAction {
  type: withdrawalActions.SET_FEE;
  fee: number;
}

export interface IWithdrawalAction {
  type: withdrawalActions.WITHDRAWAL;
  payload: IWithdrawalPayload;
  meta?: IMeta;
}

export interface ISetWithdrawalTransactionAction {
  type: withdrawalActions.SET_WITHDRAWAL_TRANSACTION;
  transaction: ITransaction;
}

export interface IGetWithdrawableDefaultsAction {
  type: withdrawalActions.GET_WITHDRAWABLE_DEFAULTS;
}

export interface ISetWithdrawableDefaultsAction {
  type: withdrawalActions.SET_WITHDRAWABLE_DEFAULTS;
  payload: IWithdrawableDefault;
}

export interface ISetPaycycleInfoAction {
  type: withdrawalActions.SET_PAYCYCLE_INFO;
  paycycleInfo: IPaycycleInfo;
}

export type TWithdrawalAction = IGetBalanceAction | ISetBalanceAction | ISetAmountAction
| ISetSuggestedValuesAction | ISetWithdrawalTransactionAction | ISetFeeAction
| IGetWithdrawableDefaultsAction | ISetWithdrawableDefaultsAction | ISetPaycycleInfoAction | ISetSourceAction;
