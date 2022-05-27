import { IMeta } from 'modules/store/types';

export enum TransactionsActions {
  GET_TRANSACTION = 'GET_TRANSACTION',
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  SET_TRANSACTIONS = 'SET_TRANSACTIONS',
  SET_TRANSACTIONS_LOADING = 'SET_TRANSACTIONS_LOADING'
}

export interface ITransaction {
  id: number;
  amount: number;
  fee: number;
  status: TransactionStatusesBE;
  created_at: string;
  accepted_at: string;
  updated_at: string;
  bank_details: ITransactionBankDetails;
}

export interface ITransactionBankDetails {
  id: number;
  employee_id: number;
  iban: string;
  created_at: string;
  updated_at: string;
  bank_branch_name: string;
  counterparty_id: string;
  account_number: string;
  account_name: string;
  branch_address: string;
  country: string;
  swift_code: string;
  account_type: string;
  work_permit_number: string;
}

export interface IGetTransactionAction {
  type: TransactionsActions.GET_TRANSACTION;
  id: number;
  meta?: {
    onSuccess?: (transaction: ITransaction) => void;
  };
}

export interface ISetTransactionsAction {
  type: TransactionsActions.SET_TRANSACTIONS;
  payload: ITransaction[];
}

export interface IGetTransactionsAction {
  type: TransactionsActions.GET_TRANSACTIONS;
  meta?: IMeta;
}

export interface ISetTransactionsLoadingAction {
  type: TransactionsActions.SET_TRANSACTIONS_LOADING;
  transactionsLoading: boolean;
}

export type TTransactionsAction = IGetTransactionsAction | ISetTransactionsAction | ISetTransactionsLoadingAction;

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
