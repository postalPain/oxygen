export enum TransactionsActions {
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  SET_TRANSACTIONS = 'SET_TRANSACTIONS',
}

export interface ITransaction {
  id: number;
  amount: string;
  fee: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ISetTransactionsAction {
  type: TransactionsActions.SET_TRANSACTIONS;
  payload: ITransaction[];
}

export interface IGetTransactionsAction {
  type: TransactionsActions.GET_TRANSACTIONS;
}

export type TTransactionsAction = IGetTransactionsAction | ISetTransactionsAction;

export enum TransactionKeys {
  id = 'id',
  amount = 'amount',
  fee = 'fee',
  status = 'status',
  created_at = 'created_at',
  updated_at = 'updated_at',
}

export enum TransactionStatuses {
  pending = 'pending',
  processing = 'processing',
  accepted = 'accepted',
  declined = 'declined',
  error = 'error',
}

export type TTransactionStatus = keyof typeof TransactionStatuses