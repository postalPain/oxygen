import { put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { TransactionsActions, TransactionStatusesBE, TTransactionsAction } from 'modules/transactions/types';
import * as transactionsActions from 'modules/transactions/actions';
import api from 'services/api';
import { errorNotification } from 'modules/notifications/actions';
const mockedTransactions = [
  {
    id: 1,
    amount: '100',
    fee: '1',
    status: TransactionStatusesBE.accepted,
    created_at: '2021-11-12T23:53:40',
    updated_at: null,
    bank_details: {
      iban: 'UE 09 878698 7465 9834 9873 3847 98'
    },
  },
  {
    id: 2,
    amount: '200',
    fee: '2',
    status: TransactionStatusesBE.pending,
    created_at: '2021-11-12T15:53:40',
    updated_at: null,
    bank_details: {
      iban: 'UE 09 878698 7465 9834 9873 3847 98'
    },
  },
  {
    id: 3,
    amount: '300',
    fee: '3',
    status: TransactionStatusesBE.processing,
    created_at: '2021-11-12T15:53:40',
    updated_at: null,
    bank_details: {
      iban: 'UE 09 878698 7465 9834 9873 3847 98'
    },
  },
  {
    id: 4,
    amount: '400',
    fee: '4',
    status: TransactionStatusesBE.declined,
    created_at: '2021-11-12T15:53:40',
    updated_at: null,
    bank_details: {
      iban: 'UE 09 878698 7465 9834 9873 3847 98'
    }
  },
  {
    id: 5,
    amount: '500',
    fee: '5',
    status: TransactionStatusesBE.error,
    created_at: '2021-11-12T15:53:40',
    updated_at: null,
    bank_details: {
      iban: 'UE 09 878698 7465 9834 9873 3847 98'
    }
  },
];
function* getTransactionsWorker (action: TTransactionsAction) {
  let response;
  yield put(transactionsActions.setTransactions(mockedTransactions));
  
  try {
    response = yield api.employees.getTransactions();
  } catch (error) {
    yield put(errorNotification());
    return;
  }
  // yield put(transactionsActions.setTransactions(mockedTransactions));
  yield put(transactionsActions.setTransactions(response.data));
}

export default function* transactionsWatcher(): SagaIterator {
  yield takeEvery(TransactionsActions.GET_TRANSACTIONS, getTransactionsWorker);
}