import { put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { withdrawalActions } from '../types';
import api, { IResponse } from 'services/api';
import { IBalance, TSuggestedValues } from 'services/api/employees';
import { errorNotification } from 'modules/notifications/actions';
import { setBalance, setSuggestedValues } from '../actions';

function* getBalanceWorker() {
  let response: IResponse<IBalance>;

  try {
    response = yield api.employees.getBalance();
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }

  yield put(setBalance(response.data));
}

function* getSuggestedValuesWorker() {
  let response: TSuggestedValues;
  try {
    response = yield api.employees.getSuggestedValues();
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }

  yield put(setSuggestedValues(response));
}

export default function* withdrawalSagas(): SagaIterator {
  yield takeLatest(withdrawalActions.GET_BALANCE, getBalanceWorker);
  yield takeLatest(withdrawalActions.GET_SUGGESTED_VALUES, getSuggestedValuesWorker);
}