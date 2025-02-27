import { IMeta } from 'modules/store/types';
import { ITransaction } from 'modules/transactions/types';
import { IBalance, IWithdrawableDefault, TSuggestedValues } from 'services/api/employees/types';
import {
  IGetBalanceAction,
  IGetWithdrawableDefaultsAction,
  IPaycycleInfo,
  ISetAmountAction,
  ISetBalanceAction,
  ISetFeeAction,
  ISetPaycycleInfoAction, ISetSourceAction,
  ISetSuggestedValuesAction,
  ISetWithdrawableDefaultsAction,
  ISetWithdrawalTransactionAction,
  IWithdrawalAction, IWithdrawalPayload,
  withdrawalActions
} from '../types';
import { WithdrawalOptions, WithdrawalSource } from 'services/analytics/types';

export const getBalance = (): IGetBalanceAction => ({
  type: withdrawalActions.GET_BALANCE
});

export const setBalance = (balance: IBalance): ISetBalanceAction => ({
  type: withdrawalActions.SET_BALANCE,
  balance
});

export const setAmount = (amount: number, inputSource: WithdrawalOptions): ISetAmountAction => ({
  type: withdrawalActions.SET_AMOUNT,
  payload: {
    amount,
    inputSource,
  },
});

export const setSource = (payload: WithdrawalSource): ISetSourceAction => ({
  type: withdrawalActions.SET_SOURCE,
  payload,
});

export const getSuggestedValues = () => ({
  type: withdrawalActions.GET_SUGGESTED_VALUES
});

export const setSuggestedValues = (suggestedValues: TSuggestedValues): ISetSuggestedValuesAction => ({
  type: withdrawalActions.SET_SUGGESTED_VALUES,
  suggestedValues
});

export const getFee = (amount) => ({
  type: withdrawalActions.GET_FEE,
  amount
});

export const setFee = (fee: number): ISetFeeAction => ({
  type: withdrawalActions.SET_FEE,
  fee
});

export const withdrawal = (payload: IWithdrawalPayload, meta?: IMeta): IWithdrawalAction => ({
  type: withdrawalActions.WITHDRAWAL,
  payload,
  meta,
});

export const setWithdrawalTransaction = (transaction: ITransaction): ISetWithdrawalTransactionAction => ({
  type: withdrawalActions.SET_WITHDRAWAL_TRANSACTION,
  transaction,
});

export const getWithdrawableDefaults = (): IGetWithdrawableDefaultsAction => ({
  type: withdrawalActions.GET_WITHDRAWABLE_DEFAULTS,
});

export const setWithdrawableDefaults = (withdrawableDefaults: IWithdrawableDefault): ISetWithdrawableDefaultsAction => ({
  type: withdrawalActions.SET_WITHDRAWABLE_DEFAULTS,
  payload: withdrawableDefaults,
});

export const getPaycycleInfo = () => ({
  type: withdrawalActions.GET_PAYCYCLE_INFO,
});

export const setPaycycleInfo = (paycycleInfo: IPaycycleInfo): ISetPaycycleInfoAction => ({
  type: withdrawalActions.SET_PAYCYCLE_INFO,
  paycycleInfo,
});
