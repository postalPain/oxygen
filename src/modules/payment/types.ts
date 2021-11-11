import { IMeta } from 'modules/store/types';
import { IBalance, IUserInfo } from 'services/api/employees';

export enum paymentActions {
  GET_BALANCE = 'GET_BALANCE',
  SET_BALANCE = 'SET_BALANCE',
}

export interface IGetBalanceAction {
  type: paymentActions.GET_BALANCE;
}

export interface ISetBalanceAction {
  type: paymentActions.SET_BALANCE;
  balance: IBalance;
}

export type TPaymentAction = IGetBalanceAction | ISetBalanceAction;