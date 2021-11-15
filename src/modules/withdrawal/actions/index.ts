import { IBalance, ISuggestedValues } from 'services/api/employees';
import {
  IGetBalanceAction, ISetAmountAction, ISetBalanceAction,
  ISetSuggestedValuesAction, withdrawalActions
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

export const setSuggestedValues = (suggestedValues: ISuggestedValues): ISetSuggestedValuesAction => ({
  type: withdrawalActions.SET_SUGGESTED_VALUES,
  suggestedValues
});