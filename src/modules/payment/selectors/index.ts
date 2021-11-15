import { RootState } from 'modules/store/rootReducer';

export const selectBalance = (state: RootState) => state.payments.balance;

export const selectAmount = (state: RootState) => state.payments.amount;