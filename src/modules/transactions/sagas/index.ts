import { put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  IGetTransactionsAction,
  TransactionsActions,
  // TransactionStatusesBE,
} from 'modules/transactions/types';
import * as transactionsActions from 'modules/transactions/actions';
import api from 'services/api';
import { errorNotification } from 'modules/notifications/actions';

function* getTransactionsWorker (action: IGetTransactionsAction) {
  let response;
  yield put(transactionsActions.setTransactionsLoading(true));

  try {
    response = yield api.employees.getTransactions();
  } catch (error) {
    yield put(transactionsActions.setTransactionsLoading(false));
    yield put(errorNotification());
    return;
  }
  yield put(transactionsActions.setTransactions(response.data));
  yield put(transactionsActions.setTransactionsLoading(false));
}

export default function* transactionsWatcher(): SagaIterator {
  yield takeEvery(TransactionsActions.GET_TRANSACTIONS, getTransactionsWorker);
}