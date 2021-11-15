import { IBalance, ISuggestedValues } from 'services/api/employees';
import { withdrawalActions, TWithdrawalAction } from '../types';

export interface IPaymentState {
  balance: IBalance;
  amount: number;
  suggestedValues: ISuggestedValues;
}

export const initialState: IPaymentState = {
  balance: {} as IBalance,
  amount: 0,
  suggestedValues: null
};

const withdrawalReducer = (
  state = initialState,
  action: TWithdrawalAction,
): IPaymentState => {
  switch (action.type) {
    case withdrawalActions.SET_BALANCE:
      return {
        ...state,
        balance: action.balance
      };
    case withdrawalActions.SET_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      };
    case withdrawalActions.SET_SUGGESTED_VALUES:
      return {
        ...state,
        suggestedValues: action.suggestedValues
      };
    default:
      return state;
  }
};

export default withdrawalReducer;
