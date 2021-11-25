import { IMeta } from 'modules/store/types';
import { ITransaction } from 'modules/transactions/types';
import { IBalance, TSuggestedValues, TFee } from 'services/api/employees';

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
  GET_MIN_WITHDRAWABLE = 'GET_MIN_WITHDRAWABLE',
  SET_MIN_WITHDRAWABLE = 'SET_MIN_WITHDRAWABLE',
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
  amount: number;
}

export interface ISetSuggestedValuesAction {
  type: withdrawalActions.SET_SUGGESTED_VALUES;
  suggestedValues: TSuggestedValues;
}

export interface ISetFeeAction {
  type: withdrawalActions.SET_FEE;
  fee: TFee;
}

export interface IWithdrawalAction {
  type: withdrawalActions.WITHDRAWAL;
  amount: number;
  meta?: IMeta;
}

export interface ISetWithdrawalTransactionAction {
  type: withdrawalActions.SET_WITHDRAWAL_TRANSACTION;
  transaction: ITransaction;
}

export interface IGetMinWithdrawableAction {
  type: withdrawalActions.GET_MIN_WITHDRAWABLE;
}

export interface IMinWithdrawable {
  amount: number,
  type: string,
}

export interface ISetMinWithdrawableAction {
  type: withdrawalActions.SET_MIN_WITHDRAWABLE;
  payload: number,
}

export type TWithdrawalAction = IGetBalanceAction | ISetBalanceAction | ISetAmountAction
| ISetSuggestedValuesAction | ISetWithdrawalTransactionAction | ISetFeeAction | IGetMinWithdrawableAction | ISetMinWithdrawableAction;