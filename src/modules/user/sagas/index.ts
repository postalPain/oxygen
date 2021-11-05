import { call, put, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import SplashScreen from 'react-native-splash-screen';
import * as actions from '../actions';
import { errorNotification, successNotification } from 'modules/notifications/actions';
import {
  ICheckVerificationAction,
  IResendVerificationCodeAction, ISetVerificationStatusAction,
  IVerifySignUpCodeAction,
  UserActions,
  VerificationStatuses,
} from 'modules/user/types';
import api, { IResponse } from 'services/api';
import { IVerificationResponse } from 'services/api/employees';
import vocab from 'i18n';
import { setVerificationStatus } from 'modules/user/actions';


function* getUserInfoWorker() {
  const { data: { data: userData } } = yield call(api.employees.userInfo);
  yield put(actions.userSetInfo(userData));
}

function* checkVerificationWorker (action: ICheckVerificationAction) {
  let response: IResponse<IVerificationResponse>;
  try {
    response = yield api.employees.checkVerification();
  } catch (error) {
    yield put(setVerificationStatus(VerificationStatuses._noStatus));
    yield action.meta?.onError?.();
    return error;
  }
  yield put(setVerificationStatus(response.data.verification_status));
  yield action.meta?.onSuccess?.(response.data.verification_status);
}

function* verifyEmailWorker (action: IVerifySignUpCodeAction) {
  try {
    yield api.employees.verifyEmail(action.code);
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }
  yield action.meta.onSuccess();
}

function* resendVerificationCodeWorker (action: IResendVerificationCodeAction) {
  try {
    yield api.employees.resendVerificationCode(action.payload.email);
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }
  yield put(successNotification({
    title: vocab.get().emailSent,
    text: vocab.get().checkInbox,
  }));
}

function* setVerificationStatusWorker (action: ISetVerificationStatusAction) {
  if (!!action.payload) setTimeout(() => { SplashScreen.hide(); }, 300);
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(UserActions.USER_GET_INFO, getUserInfoWorker);
  yield takeEvery(UserActions.VERIFY_EMAIL, verifyEmailWorker);
  yield takeEvery(UserActions.CHECK_VERIFICATION, checkVerificationWorker);
  yield takeEvery(UserActions.RESEND_VERIFICATION_CODE, resendVerificationCodeWorker);
  yield takeEvery(UserActions.SET_VERIFICATION_STATUS, setVerificationStatusWorker);
}