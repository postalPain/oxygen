import { ITransaction } from 'modules/transactions/types';
import { IBalance, TFee, TSuggestedValues } from 'services/api/employees/types';
import { IPaycycleInfo, TWithdrawalAction, withdrawalActions } from '../types';
import { WithdrawalOptions, WithdrawalSource } from '../../../services/analytics/types';

export interface IPaymentState {
  balance: IBalance;
  amount: number;
  suggestedValues: TSuggestedValues;
  fee: TFee;
  transaction: ITransaction;
  minimumWithdrawable: number;
  maximumWithdrawable: number;
  paycycleInfo: IPaycycleInfo;
  inputSource: WithdrawalOptions;
  screenSource: WithdrawalSource;
}

export const withdrawalDefaultState: IPaymentState = {
  balance: {
    earned_wages: null,
    is_withdraw_paused: null,
    total_withdrawn_amount: null,
    withdrawable_wages: null,
  } as IBalance,
  amount: 0,
  inputSource: 'default-value',
  screenSource: null,
  suggestedValues: null,
  fee: null, // TODO: Switch to BE in sagas when it's ready
  transaction: null,
  minimumWithdrawable: null,
  maximumWithdrawable: null,
  paycycleInfo: {
    start: null,
    end: null,
    left_days: null,
    total_days: null,
  }
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
        ...action.payload,
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
    case withdrawalActions.SET_WITHDRAWABLE_DEFAULTS:
      return {
        ...state,
        minimumWithdrawable: Math.floor(action.payload.minimal), // TODO: Remove rounding when BE adds it
        maximumWithdrawable: Math.floor(action.payload.maximum), // TODO: Remove rounding when BE adds it
      };
    case withdrawalActions.SET_PAYCYCLE_INFO:
      return {
        ...state,
        paycycleInfo: action.paycycleInfo
      };
    case withdrawalActions.SET_SOURCE:
      return {
        ...state,
        screenSource: action.payload,
      };
    default:
      return state;
  }
};

export default withdrawalReducer;
