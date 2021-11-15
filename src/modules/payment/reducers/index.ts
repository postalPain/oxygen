import { IBalance } from 'services/api/employees';
import { paymentActions, TPaymentAction } from '../types';

export interface IPaymentState {
  balance: IBalance;
  amount: number;
}

export const initialState: IPaymentState = {
  balance: {} as IBalance,
  amount: 0,
};

const paymentReducer = (
  state = initialState,
  action: TPaymentAction,
): IPaymentState => {
  switch (action.type) {
    case paymentActions.SET_BALANCE:
      return {
        ...state,
        balance: action.balance
      };
    case paymentActions.SET_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      };
    default:
      return state;
  }
};

export default paymentReducer;
