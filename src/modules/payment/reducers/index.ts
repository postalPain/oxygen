import { IBalance } from 'services/api/employees';
import { paymentActions, TPaymentAction } from '../types';

export interface IPaymentState {
  balance: IBalance;
}

export const initialState: IPaymentState = {
  balance: {} as IBalance
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
    default:
      return state;
  }
};

export default paymentReducer;
