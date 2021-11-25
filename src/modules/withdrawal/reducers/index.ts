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
  balance: {
    earned_wages: null,
    is_withdraw_paused: null,
    total_withdrawn_amount: null,
    withdrawable_wages: null,
  } as IBalance,
  amount: 0,
  suggestedValues: null,
  fee: null, // TODO: Switch to BE in sagas when it's ready
  transaction: null,
  minimumWithdrawable: null,
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
    case withdrawalActions.SET_MIN_WITHDRAWABLE:
      return {
        ...state,
        minimumWithdrawable: action.payload,
      };
    default:
      return state;
  }
};

export default withdrawalReducer;
