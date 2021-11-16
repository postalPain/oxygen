import { RootState } from 'modules/store/rootReducer';

export const selectBalance = (state: RootState) => state.withdrawal.balance;

export const selectAmount = (state: RootState) => state.withdrawal.amount;

export const selectSuggestedValues = (state: RootState) => state.withdrawal.suggestedValues;

export const selectIsWithdrawalPaused = (state: RootState) => state.withdrawal.balance.is_withdraw_paused;