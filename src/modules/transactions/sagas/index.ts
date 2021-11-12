import { put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { TransactionsActions, TTransactionsAction } from 'modules/transactions/types';
import * as transactionsActions from 'modules/transactions/actions';
import api from 'services/api';
import { errorNotification } from 'modules/notifications/actions';
const mockedTransactions = [
  {
    id: 1,
    amount: '100',
    fee: '1',
    status: 'accepted',
    // created_at: '2021-11-11T15:53:40.000000Z',
    created_at: '11.11.2021.',
    updated_at: null,
  },
  {
    id: 2,
    amount: '200',
    fee: '2',
    status: 'pending',
    // created_at: '2021-11-11T15:53:40.000000Z',
    created_at: '11.10.2021.',
    updated_at: null,
  },
  {
    id: 3,
    amount: '300',
    fee: '3',
    status: 'processing',
    // created_at: '2021-11-11T15:53:40.000000Z',
    created_at: '11.09.2021.',
    updated_at: null,
  },
  {
    id: 4,
    amount: '400',
    fee: '4',
    status: 'declined',
    // created_at: '2021-11-11T15:53:40.000000Z',
    created_at: '11.08.2021.',
    updated_at: null,
  },
  {
    id: 5,
    amount: '500',
    fee: '5',
    status: 'error',
    // created_at: '2021-11-11T15:53:40.000000Z',
    created_at: '11.07.2021.',
    updated_at: null,
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
  yield put(transactionsActions.setTransactions(mockedTransactions));
  // yield put(transactionsActions.setTransactions(response.data));
}

export default function* transactionsWatcher(): SagaIterator {
  yield takeEvery(TransactionsActions.GET_TRANSACTIONS, getTransactionsWorker);
}