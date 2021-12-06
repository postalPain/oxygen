import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import * as actions from '../actions';
import { errorNotification, successNotification } from 'modules/notifications/actions';
import {
  ICheckVerificationAction,
  IResendVerificationCodeAction,
  IUserSetInfoAction,
  IVerifySignUpCodeAction,
  UserActions,
  UserStoredKeys,
} from 'modules/user/types';
import api, { IResponse } from 'services/api';
import vocab from 'i18n';
import { setVerificationStatus } from 'modules/user/actions';
import { IUserInfo, IVerificationResponse } from 'services/api/employees';
import SplashScreen from 'react-native-splash-screen';
import { setItem } from 'modules/asyncStorage';
import { AuthStoredKeys } from 'modules/auth/types';


function* getUserInfoWorker() {
  let response: IResponse<IUserInfo>;
  try {
    response = yield call(api.employees.userInfo);
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }

  const mockedUserData: IUserInfo = {
    ...response.data,
    // TODO: Remove after BE returns actual fields
    first_name: response.data.first_name || response.data.email.split('@')?.[0],
    last_name: response.data.last_name || '',
  };
  yield put(actions.userSetInfo(mockedUserData));
}

const hideSplashScreen = () => setTimeout(() => {
  SplashScreen.hide();
}, 300);

function* checkVerificationWorker (action: ICheckVerificationAction) {
  let response: IResponse<IVerificationResponse>;
  try {
    response = yield api.employees.checkVerification();
  } catch (error) {
    yield put(actions.setStatusError(true));
    yield action.meta?.onError?.();
    yield hideSplashScreen();
    return error;
  }
  yield put(actions.setStatusError(false));
  yield put(setVerificationStatus(response.data.verification_status));
  yield action.meta?.onSuccess?.(response.data.verification_status);
  yield hideSplashScreen();
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
  yield action?.meta?.onSuccess?.();
}

function* userSetInfoWorker (action: IUserSetInfoAction) {
  yield setItem(UserStoredKeys.first_name, action.payload?.first_name);
  yield setItem(AuthStoredKeys.email, action.payload?.email);
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(UserActions.USER_GET_INFO, getUserInfoWorker);
  yield takeEvery(UserActions.USER_SET_INFO, userSetInfoWorker);
  yield takeEvery(UserActions.VERIFY_EMAIL, verifyEmailWorker);
  yield takeEvery(UserActions.CHECK_VERIFICATION, checkVerificationWorker);
  yield takeEvery(UserActions.RESEND_VERIFICATION_CODE, resendVerificationCodeWorker);
}