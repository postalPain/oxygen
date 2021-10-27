import { call, put, takeEvery, } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import api from 'services/api';
import * as actions from '../actions';
import { IVerifySignUpCodeAction, UserActions } from '../types';
import { errorNotification } from 'modules/notifications/actions';


export function* getUserInfoWorker() {
  const { data: { data: userData } } = yield call(api.employees.userInfo);
  yield put(actions.userSetInfo(userData));
}

export function* verifyEmailWorker (action: IVerifySignUpCodeAction) {
  let response;
  try {
    response = yield api.employees.verifyEmail(action.code);
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }
  yield action.meta.onSuccess();
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(UserActions.USER_GET_INFO, getUserInfoWorker);
  yield takeEvery(UserActions.VERIFY_EMAIL, verifyEmailWorker);
}