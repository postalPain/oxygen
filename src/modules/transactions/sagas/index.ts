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
import { IResponse } from 'services/api/types';
import { handleApiError } from 'modules/store/helpers';

function* getTransactionWorker (action: IGetTransactionAction) {
  try {
    const response: IResponse<ITransaction> = yield api.employees.getTransaction(action.id);
    yield action.meta?.onSuccess?.(response.data);
  } catch (error) {
    yield handleApiError(error);
  }
}

function* getTransactionsWorker (action: IGetTransactionsAction) {
  yield put(transactionsActions.setTransactionsLoading(true));

  try {
    const response: IResponse<ITransaction[]> = yield api.employees.getTransactions();
    yield put(transactionsActions.setTransactions(response.data));
  } catch (error) {
    yield handleApiError(error);
  } finally {
    yield put(transactionsActions.setTransactionsLoading(false));
  }
}

export default function* transactionsSagas(): SagaIterator {
  yield takeLatest(TransactionsActions.GET_TRANSACTION, getTransactionWorker);
  yield takeLatest(TransactionsActions.GET_TRANSACTIONS, getTransactionsWorker);
}