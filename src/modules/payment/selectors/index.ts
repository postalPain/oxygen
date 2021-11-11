import { RootState } from 'modules/store/rootReducer';

export const selectBalance = (state: RootState) => state.payments.balance;