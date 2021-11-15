import { IBalance, ISuggestedValues, IUserInfo } from 'services/api/employees';

export enum withdrawalActions {
  GET_BALANCE = 'GET_BALANCE',
  SET_BALANCE = 'SET_BALANCE',
  SET_AMOUNT = 'SET_AMOUNT',
  GET_SUGGESTED_VALUES = 'GET_SUGGESTED_VALUES',
  SET_SUGGESTED_VALUES = 'SET_SUGGESTED_VALUES',
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
  suggestedValues: ISuggestedValues;
}

export type TWithdrawalAction = IGetBalanceAction | ISetBalanceAction | ISetAmountAction
| ISetSuggestedValuesAction;