import { IBalance } from 'services/api/employees';
import { IGetBalanceAction, ISetBalanceAction, paymentActions } from '../types';

export const getBalance = (): IGetBalanceAction => ({
  type: paymentActions.GET_BALANCE
});

export const setBalance = (balance: IBalance): ISetBalanceAction => ({
  type: paymentActions.SET_BALANCE,
  balance
});