import {
  IGetTransactionAction,
  IGetTransactionsAction,
  ISetTransactionsAction, ISetTransactionsLoadingAction, ITransaction,
  TransactionsActions,
} from 'modules/transactions/types';
import { IMeta } from 'modules/store/types';


export const getTransaction = (id: number, onSuccess?): IGetTransactionAction => ({
  type: TransactionsActions.GET_TRANSACTION,
  id,
  meta: { onSuccess }
});

export const getTransactions = (meta?: IMeta): IGetTransactionsAction => ({
  type: TransactionsActions.GET_TRANSACTIONS,
  meta,
});

export const setTransactions = (payload: ITransaction[]): ISetTransactionsAction => ({
  type: TransactionsActions.SET_TRANSACTIONS,
  payload,
});

export const setTransactionsLoading = (transactionsLoading: boolean): ISetTransactionsLoadingAction => ({
  type: TransactionsActions.SET_TRANSACTIONS_LOADING,
  transactionsLoading,
});