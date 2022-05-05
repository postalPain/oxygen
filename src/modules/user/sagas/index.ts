import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import * as actions from '../actions';
import { errorNotification, successNotification } from 'modules/notifications/actions';
import {
  ICheckVerificationAction,
  IResendVerificationCodeAction,
  IUserClearInfoAction,
  IUserSetInfoAction,
  IVerifySignUpCodeAction,
  UserActions,
  UserStoredKeys,
} from 'modules/user/types';
import api from 'services/api';
import { IResponse } from 'services/api/types';
import { analyticEvents, analytics } from 'services/analytics';
import vocab from 'i18n';
import { setVerificationStatus } from 'modules/user/actions';
import { IUserInfo, IVerificationResponse } from 'services/api/employees/types';
import { removeItems, setItem } from 'modules/asyncStorage';
import { AuthStoredKeys } from 'modules/auth/asyncStorage';
import { setSignUpCodeLoading } from 'modules/auth/actions';
import moment from 'moment';


function* getUserInfoWorker() {
  let response: IResponse<IUserInfo>;
  try {
    response = yield call(api.employees.userInfo);
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    return;
  }
  analytics.setUserProperties({
    distinctId: response.data.id,
    companyId: response.data.company_id,
    companyCode: response.data.registration_id.split('-')?.[1],
    transactionsCount: response.data.transaction_all_time_count,
    transactionsValue: response.data.transaction_all_time_count_value,
    transactionsServiceCharge: response.data.transaction_all_time_count_service_charge,
    transactionLastUpdated: moment().utc().toISOString(),
  });
  if (response.data.is_first_visit) {
    analytics.logEvent(analyticEvents.firstLogin, {
      timestamp: moment().utc().toISOString(),
    });
  }
  const mockedUserData: IUserInfo = {
    ...response.data,
    // TODO: Remove after BE returns actual fields
    first_name: response.data.first_name || response.data.email.split('@')?.[0],
    last_name: response.data.last_name || '',
  };
  yield put(actions.userSetInfo(mockedUserData));
}



function* checkVerificationWorker (action: ICheckVerificationAction) {
  let response: IResponse<IVerificationResponse>;
  try {
    response = yield api.employees.checkVerification();
  } catch (error) {
    yield put(actions.setStatusError(true));
    yield action.meta?.onError?.();
    return error;
  }
  yield put(actions.setStatusError(false));
  yield put(setVerificationStatus(response.data.verification_status));
  yield action.meta?.onSuccess?.(response.data.verification_status);
}

function* verifyEmailWorker (action: IVerifySignUpCodeAction) {
  yield put(setSignUpCodeLoading(true));
  try {
    yield call(api.employees.verifyEmail, action.code);
  } catch (error) {
    yield put(errorNotification({ text: error.message }));
    yield put(setSignUpCodeLoading(false));
    return;
  }
  yield action.meta.onSuccess();
  yield put(setSignUpCodeLoading(false));
}

function* resendVerificationCodeWorker (action: IResendVerificationCodeAction) {
  try {
    yield call(api.employees.resendVerificationCode, action.payload.email);
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

function* userClearInfoWorker(action: IUserClearInfoAction) {
  yield removeItems([
    AuthStoredKeys.email,
    UserStoredKeys.first_name,
  ]);
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(UserActions.USER_GET_INFO, getUserInfoWorker);
  yield takeEvery(UserActions.USER_SET_INFO, userSetInfoWorker);
  yield takeEvery(UserActions.VERIFY_EMAIL, verifyEmailWorker);
  yield takeEvery(UserActions.CHECK_VERIFICATION, checkVerificationWorker);
  yield takeEvery(UserActions.RESEND_VERIFICATION_CODE, resendVerificationCodeWorker);
  yield takeEvery(UserActions.USER_CLEAR_INFO, userClearInfoWorker);
}
