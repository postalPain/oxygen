import { IBalance } from 'services/api/employees';
import { IGetBalanceAction, ISetAmountAction, ISetBalanceAction, paymentActions } from '../types';

export const getBalance = (): IGetBalanceAction => ({
  type: paymentActions.GET_BALANCE
});

export const setBalance = (balance: IBalance): ISetBalanceAction => ({
  type: paymentActions.SET_BALANCE,
  balance
});

export const setAmount = (amount: number): ISetAmountAction => ({
  type: paymentActions.SET_AMOUNT,
  amount,
});