import { put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  IGetTransactionAction,
  IGetTransactionsAction,
  ITransaction,
  TransactionsActions,
} from 'modules/transactions/types';
import * as transactionsActions from 'modules/transactions/actions';
import api from 'services/api';
import { errorNotification } from 'modules/notifications/actions';
import { IResponse } from 'services/api/types';
import { IError } from 'services/api/errors';

function* getTransactionWorker (action: IGetTransactionAction) {
  try {
    const response: IResponse<ITransaction> = yield api.employees.getTransaction(action.id);
    yield action.meta?.onSuccess?.(response.data);
  } catch (error) {
    yield put(errorNotification((error as IError).message));
  }
}

function* getTransactionsWorker (action: IGetTransactionsAction) {
  yield put(transactionsActions.setTransactionsLoading(true));

  try {
    const response: IResponse<ITransaction[]> = yield api.employees.getTransactions();
    yield put(transactionsActions.setTransactions(response.data));
  } catch (error) {
    yield put(errorNotification());
  } finally {
    yield put(transactionsActions.setTransactionsLoading(false));
  }
}

export default function* transactionsSagas(): SagaIterator {
  yield takeLatest(TransactionsActions.GET_TRANSACTION, getTransactionWorker);
  yield takeLatest(TransactionsActions.GET_TRANSACTIONS, getTransactionsWorker);
}