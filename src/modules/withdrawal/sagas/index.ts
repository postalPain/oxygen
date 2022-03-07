import { put, takeLatest, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { IPaycycleInfo, IWithdrawalAction, withdrawalActions } from '../types';
import api from 'services/api';
import { IResponse } from 'services/api/types';
import { IBalance, IWithdrawableDefault, TFee, TSuggestedValues } from 'services/api/employees/types';
import { errorNotification } from 'modules/notifications/actions';
import {
  getBalance,
  setBalance,
  setFee,
  setWithdrawableDefaults,
  setSuggestedValues,
  setWithdrawalTransaction,
  getWithdrawableDefaults,
  setPaycycleInfo,
} from '../actions';
import { ITransaction } from 'modules/transactions/types';
import { getTransactions } from 'modules/transactions/actions';
import { selectBalance } from '../selectors';
import { getState } from 'modules/store';
import { analyticEvents, analytics } from '../../../services/analytics';

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

  yield put(setFee(response.data.total_withdrawn_amount ? 25 : 0));
}

function* getSuggestedValuesWorker() {
  let response: IResponse<TSuggestedValues>;
  try {
    response = yield api.employees.getSuggestedValues();
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }

  yield put(setSuggestedValues(response.data.filter(x => x))); // TODO: Remove once BE applies fix
}

function* getFeeWorker() {
  const balance = selectBalance(getState());
  let response: IResponse<TFee>;
  try { // TODO: Uncomment when fee API works
    // response = yield api.employees.getFee(100);

    // response = { data: balance.total_withdrawn_amount ? 25 : 0 }; // TODO: Remove once BE is ready
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

  analytics.logEvent(analyticEvents.madeWithdrawal, {
    withdrawalAmount: action.amount,
  });

  yield put(setWithdrawalTransaction(response.data));
  yield action.meta.onSuccess?.();
  yield put(getBalance());
  yield put(getTransactions());
  yield put(getWithdrawableDefaults());
}

function* getWithdrawableDefaultsWorker(action: IWithdrawalAction) {
  let response: IResponse<IWithdrawableDefault>;
  try {
    response = yield api.employees.getWithdrawableDefaults();
  } catch (error) {
    return;
  }
  yield put(setWithdrawableDefaults(response.data));
  yield action?.meta?.onSuccess?.();
}

function* getPaycycleInfoWorker () {
  let response: IResponse<IPaycycleInfo>;

  try {
    response = yield call(api.employees.getPaycycleInfo);
  } catch (e) {
    yield put(errorNotification({ text: e.message }));
    return;
  }

  yield put(setPaycycleInfo(response.data));
}

export default function* withdrawalSagas(): SagaIterator {
  yield takeLatest(withdrawalActions.GET_BALANCE, getBalanceWorker);
  yield takeLatest(withdrawalActions.GET_SUGGESTED_VALUES, getSuggestedValuesWorker);
  yield takeLatest(withdrawalActions.GET_FEE, getFeeWorker);
  yield takeLatest(withdrawalActions.GET_WITHDRAWABLE_DEFAULTS, getWithdrawableDefaultsWorker);
  yield takeEvery(withdrawalActions.WITHDRAWAL, withdrawalWorker);
  yield takeLatest(withdrawalActions.GET_PAYCYCLE_INFO, getPaycycleInfoWorker);
}
