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
  try {
    response = yield api.employees.getTransactions();
  } catch (error) {
    yield action?.meta?.onError?.();
    yield put(errorNotification());
    return;
  }
  yield action?.meta?.onSuccess?.(response.data);
  yield put(transactionsActions.setTransactions(response.data));
}

export default function* transactionsWatcher(): SagaIterator {
  yield takeEvery(TransactionsActions.GET_TRANSACTIONS, getTransactionsWorker);
}