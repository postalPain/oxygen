import { RootState } from 'modules/store/rootReducer';
import { TransactionStatusesBE } from '../types';

export const selectTransactions = (state: RootState) => state.transactions.transactions;

export const selectTransactionsLoading = (state: RootState) => state.transactions.transactionsLoading;

export const selectNoPendingTransaction = (state: RootState): boolean => {
  return !state.transactions.transactions.find(({ status }) => {
    return (status === TransactionStatusesBE.pending)
      || (status === TransactionStatusesBE.processing);
  });
};