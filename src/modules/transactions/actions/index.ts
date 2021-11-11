import {
  IGetTransactionsAction,
  ISetTransactionsAction, ITransaction,
  TransactionsActions,
} from 'modules/transactions/types';


export const getTransactions = (): IGetTransactionsAction => ({
  type: TransactionsActions.GET_TRANSACTIONS,
});

export const setTransactions = (payload: ITransaction[]): ISetTransactionsAction => ({
  type: TransactionsActions.SET_TRANSACTIONS,
  payload,
});