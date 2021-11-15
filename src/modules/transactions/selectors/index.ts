import { RootState } from 'modules/store/rootReducer';

export const selectTransactions = (state: RootState) => state.transactions;
