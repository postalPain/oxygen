export enum TransactionsActions {
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  SET_TRANSACTIONS = 'SET_TRANSACTIONS',
}

export interface ITransaction {
  id: number;
  amount: string;
  fee: string;
  status: TTransactionStatusBE;
  created_at: string;
  updated_at: string;
  bank_details: ITransactionBankDetails;
}

export interface ITransactionBankDetails {
  iban: string;
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
  iban = 'iban',
}

export enum TransactionStatusesFE {
  pending = 'pending',
  failed = 'failed',
  completed = 'completed',
}

export enum TransactionStatusesBE {
  pending = 'pending',
  processing = 'processing',
  accepted = 'accepted',
  declined = 'declined',
  error = 'error',
}

export type TTransactionStatusBE = keyof typeof TransactionStatusesBE;

export type TTransactionStatusFE = keyof typeof TransactionStatusesFE;