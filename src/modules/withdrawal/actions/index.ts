import { IMeta } from 'modules/store/types';
import { ITransaction } from 'modules/transactions/types';
import { IBalance, TFee, TSuggestedValues } from 'services/api/employees';
import {
  IGetBalanceAction,
  IGetMinWithdrawableAction,
  ISetMinWithdrawableAction,
  ISetAmountAction,
  ISetBalanceAction,
  ISetFeeAction,
  ISetSuggestedValuesAction,
  ISetWithdrawalTransactionAction,
  IWithdrawalAction,
  withdrawalActions
} from '../types';

export const getBalance = (): IGetBalanceAction => ({
  type: withdrawalActions.GET_BALANCE
});

export const setBalance = (balance: IBalance): ISetBalanceAction => ({
  type: withdrawalActions.SET_BALANCE,
  balance
});

export const setAmount = (amount: number): ISetAmountAction => ({
  type: withdrawalActions.SET_AMOUNT,
  amount,
});

export const getSuggestedValues = () => ({
  type: withdrawalActions.GET_SUGGESTED_VALUES
});

export const setSuggestedValues = (suggestedValues: TSuggestedValues): ISetSuggestedValuesAction => ({
  type: withdrawalActions.SET_SUGGESTED_VALUES,
  suggestedValues
});

export const getFee = () => ({
  type: withdrawalActions.GET_FEE
});

export const setFee = (fee: TFee): ISetFeeAction => ({
  type: withdrawalActions.SET_FEE,
  fee
});

export const withdrawal = (amount: number, meta?: IMeta): IWithdrawalAction => ({
  type: withdrawalActions.WITHDRAWAL,
  amount,
  meta,
});

export const setWithdrawalTransaction = (transaction: ITransaction): ISetWithdrawalTransactionAction => ({
  type: withdrawalActions.SET_WITHDRAWAL_TRANSACTION,
  transaction,
});

export const getMinWithdrawable = (): IGetMinWithdrawableAction => ({
  type: withdrawalActions.GET_MIN_WITHDRAWABLE,
});

export const setMinWithdrawable = (minWithdrawable: number): ISetMinWithdrawableAction => ({
  type: withdrawalActions.SET_MIN_WITHDRAWABLE,
  payload: minWithdrawable,
});