import { ITransaction } from 'modules/transactions/types';
import { IBalance, TFee, TSuggestedValues } from 'services/api/employees';
import { withdrawalActions, TWithdrawalAction } from '../types';

export interface IPaymentState {
  balance: IBalance;
  amount: number;
  suggestedValues: TSuggestedValues;
  fee: TFee;
  transaction: ITransaction;
  minimumWithdrawable: number;
}

export const withdrawalDefaultState: IPaymentState = {
  balance: {} as IBalance,
  amount: 0,
  suggestedValues: null,
  fee: null, // TODO: Switch to BE in sagas when it's ready
  transaction: null,
  minimumWithdrawable: 100 // TODO: Switch to BE once it's ready
};

const withdrawalReducer = (
  state = withdrawalDefaultState,
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
    case withdrawalActions.SET_WITHDRAWAL_TRANSACTION:
      return {
        ...state,
        transaction: action.transaction
      };
    case withdrawalActions.SET_FEE:
      return {
        ...state,
        fee: action.fee
      };
    default:
      return state;
  }
};

export default withdrawalReducer;
