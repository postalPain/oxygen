import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { paymentActions } from '../types';
import api, { IResponse } from 'services/api';
import { IBalance } from 'services/api/employees';
import { errorNotification } from 'modules/notifications/actions';
import { setBalance } from '../actions';

function* getBalanceWorker () {
  let response: IResponse<IBalance>;

  try {
    response = yield api.employees.getBalance();
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }

  yield put(setBalance(response.data));
}

export default function* paymentSagas(): SagaIterator {
  yield takeLatest(paymentActions.GET_BALANCE, getBalanceWorker);
}