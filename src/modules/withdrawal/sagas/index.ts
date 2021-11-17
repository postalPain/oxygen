import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { IWithdrawalAction, withdrawalActions } from '../types';
import api, { IResponse } from 'services/api';
import { IBalance, TFee, TSuggestedValues } from 'services/api/employees';
import { errorNotification } from 'modules/notifications/actions';
import { getBalance, setBalance, setFee, setSuggestedValues, setWithdrawalTransaction } from '../actions';
import { ITransaction } from 'modules/transactions/types';
import { getTransactions } from 'modules/transactions/actions';

function* getBalanceWorker() {
  let response: IResponse<IBalance>;

  try {
    response = yield api.employees.getBalance();
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }

  yield put(setBalance({
    ...response.data,
    withdrawable_wages: Math.floor(response.data.withdrawable_wages), // TODO: Remove once BE starts rounding value
    earned_wages: Math.floor(response.data.earned_wages)
  }));
}

function* getSuggestedValuesWorker() {
  let response: IResponse<TSuggestedValues>;
  try {
    response = yield api.employees.getSuggestedValues();
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }

  yield put(setSuggestedValues(response.data));
}

function* getFeeWorker() {
  let response: IResponse<TFee>;
  try {
    response = yield api.employees.getFee();
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }

  yield put(setFee(response.data));
}

function* withdrawalWorker(action: IWithdrawalAction) {
  let response: IResponse<ITransaction>;

  try {
    response = yield api.employees.withdrawal(action.amount);
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }

  yield put(setWithdrawalTransaction(response.data));
  yield action.meta.onSuccess?.();
  yield put(getBalance());
  yield put(getTransactions());
}

export default function* withdrawalSagas(): SagaIterator {
  yield takeLatest(withdrawalActions.GET_BALANCE, getBalanceWorker);
  yield takeLatest(withdrawalActions.GET_SUGGESTED_VALUES, getSuggestedValuesWorker);
  yield takeLatest(withdrawalActions.GET_FEE, getFeeWorker);
  yield takeEvery(withdrawalActions.WITHDRAWAL, withdrawalWorker);
}