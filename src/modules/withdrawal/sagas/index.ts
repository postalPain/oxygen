import { put, takeLatest, takeEvery, call, debounce } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { IPaycycleInfo, ISetAmountAction, IWithdrawalAction, withdrawalActions } from '../types';
import api from 'services/api';
import { IResponse } from 'services/api/types';
import { IBalance, IWithdrawableDefault, IFeeResponse, TSuggestedValues } from 'services/api/employees/types';
import {
  getBalance,
  setBalance,
  setFee,
  setWithdrawableDefaults,
  setSuggestedValues,
  setWithdrawalTransaction,
  getWithdrawableDefaults,
  setPaycycleInfo,
  getFee,
} from '../actions';
import { ITransaction } from 'modules/transactions/types';
import { getTransactions } from 'modules/transactions/actions';
import { analyticEvents, analytics } from 'services/analytics';
import { handleApiError } from 'modules/store/helpers';

function* getBalanceWorker() {
  let response: IResponse<IBalance>;

  try {
    response = yield api.employees.getBalance();
  } catch (error) {
    yield handleApiError(error);
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
    yield handleApiError(error);
    return;
  }

  yield put(setSuggestedValues(response.data.filter(x => x))); // TODO: Remove once BE applies fix
}

function* getFeeWorker(action) {
  let response: IResponse<IFeeResponse>;
  try {
    response = yield api.employees.getFee(action.amount);
  } catch (error) {
    yield handleApiError(error);
    return;
  }

  yield put(setFee(response.data.fee_value));
}

function* withdrawalWorker(action: IWithdrawalAction) {
  let response: IResponse<ITransaction>;

  try {
    response = yield api.employees.withdrawal(action.payload.amount);
  } catch (error) {
    yield handleApiError(error);
    return;
  }

  const { amount, fee } = response.data;
  analytics.logEvent(analyticEvents.madeWithdrawal, {
    withdrawalAmount: amount,
    serviceCharge: fee,
    totalDeduction: amount + fee,
    valueEntry: action.payload.inputSource,
    source: action.payload.screenSource,
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
  yield put(getFee(response.data.minimal));
  yield action?.meta?.onSuccess?.();
}

function* getPaycycleInfoWorker () {
  let response: IResponse<IPaycycleInfo>;

  try {
    response = yield call(api.employees.getPaycycleInfo);
  } catch (error) {
    yield handleApiError(error);
    return;
  }

  yield put(setPaycycleInfo(response.data));
}

function* setAmountWorker(action: ISetAmountAction) {
  yield put(getFee(action.payload.amount));
}

export default function* withdrawalSagas(): SagaIterator {
  yield takeLatest(withdrawalActions.GET_BALANCE, getBalanceWorker);
  yield takeLatest(withdrawalActions.GET_SUGGESTED_VALUES, getSuggestedValuesWorker);
  yield takeLatest(withdrawalActions.GET_FEE, getFeeWorker);
  yield takeLatest(withdrawalActions.GET_WITHDRAWABLE_DEFAULTS, getWithdrawableDefaultsWorker);
  yield takeEvery(withdrawalActions.WITHDRAWAL, withdrawalWorker);
  yield takeLatest(withdrawalActions.GET_PAYCYCLE_INFO, getPaycycleInfoWorker);
  yield debounce(500, withdrawalActions.SET_AMOUNT, setAmountWorker);
}
