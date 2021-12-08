import { RootState } from 'modules/store/rootReducer';

export const selectBalance = (state: RootState) => state.withdrawal.balance;

export const selectAmount = (state: RootState) => state.withdrawal.amount;

export const selectSuggestedValues = (state: RootState) => state.withdrawal.suggestedValues;

export const selectIsWithdrawalPaused = (state: RootState) => state.withdrawal.balance.is_withdraw_paused;

export const selectFee = (state: RootState) => state.withdrawal.fee;

export const selectWithdrawalTransaction = (state: RootState) => state.withdrawal.transaction;

export const selectMinimumWithdrawable = (state: RootState) => state.withdrawal.minimumWithdrawable;

export const selectMaximumWithdrawable = (state: RootState) => state.withdrawal.maximumWithdrawable;