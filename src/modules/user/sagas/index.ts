import { call, put, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { UserActions } from '../types';
import { ICheckVerificationAction } from 'modules/user/types';
import api, { addHeader } from 'services/api';
import { setVerificationStatus } from '../actions';


export function* getUserInfoWorker() {
}

function* checkVerificationWorker (action: ICheckVerificationAction) {
  let response; // TODO add IResponse type
  const access_token = yield select(state => state.auth.authData.access_token);
  yield call(addHeader, {
    name: 'Authorization',
    value: `Bearer ${access_token}`,
  });
  try {
    response = yield call(api.checkVerification);
  } catch (error) {
    console.log('error ========>>', error);
    yield action.meta?.onError?.();
    return;
  }
  console.log('response ========>>', response);
  yield put(setVerificationStatus(response.verification_status));
  yield action.meta?.onSuccess?.(response);
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(UserActions.USER_GET_INFO, getUserInfoWorker);
  yield takeEvery(UserActions.CHECK_VERIFICATION, checkVerificationWorker);
  
}