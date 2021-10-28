import { call, put, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import * as actions from '../actions';
import { errorNotification } from 'modules/notifications/actions';
import { ICheckVerificationAction, IVerifySignUpCodeAction, UserActions } from 'modules/user/types';
import api from 'services/api';
import { setVerificationStatus } from 'modules/user/actions';
import { addHeader } from 'services/api/request';


export function* getUserInfoWorker() {
  const { data: { data: userData } } = yield call(api.employees.userInfo);
  yield put(actions.userSetInfo(userData));
}

function* checkVerificationWorker (action: ICheckVerificationAction) {
  let response;
  try {
    response = yield call(api.employees.checkVerification);
  } catch (error) {
    yield action.meta?.onError?.();
    return;
  }
  yield put(setVerificationStatus(response.data.verification_status));
  yield action.meta?.onSuccess?.(response);
}

export function* verifyEmailWorker (action: IVerifySignUpCodeAction) {
  try {
    yield api.employees.verifyEmail(action.code);
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }
  yield action.meta.onSuccess();
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(UserActions.USER_GET_INFO, getUserInfoWorker);
  yield takeEvery(UserActions.VERIFY_EMAIL, verifyEmailWorker);
  yield takeEvery(UserActions.CHECK_VERIFICATION, checkVerificationWorker);
  
}