import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import api from 'services/api';
import * as authActions from 'modules/auth/actions';
import {
  AuthActions,
  IAuthData,
  IClearAuthDataAction,
  IForgotPasswordAction,
  IResetPasswordAction,
  ISetAuthDataAction,
  ISignInAction,
  ISignInSuccessAction,
  ISignOutAction,
  ISignUpAction,
} from 'modules/auth/types';
import { getState } from 'modules/store';
import * as notificationActions from 'modules/notifications/actions';
import { defaultSignUpErrors } from 'modules/auth/reducers';
import { selectForgotPassword } from 'modules/auth/selectors';
import { removeItems, setItems } from 'modules/asyncStorage';
import { addCodeSentAt, AuthStoredKeys } from 'modules/auth/asyncStorage';
import { ERROR_CODES, IError } from 'services/api/errors';
import { storeAuthData } from '../asyncStorage';
import { addToStoredLoginEmails, incrementLoginCount } from 'modules/user/asyncStorage';
import { storeBiometricData } from 'modules/biometrics/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import { IResponse } from '../../../services/api/types';
import { analyticEvents, analytics } from '../../../services/analytics';
import moment from 'moment';
import { getFcmToken } from 'modules/pushNotifications';
import { getLogger } from 'modules/logger';


function* handleError (error: IError) {
  yield put(notificationActions.errorNotification({ text: error.message }));
}

function transformSignUpError (err: IError) {
  const errors = { ...defaultSignUpErrors };
  if (err?.code === ERROR_CODES.validation) {
    for (const field in err.error) {
      errors[field] = err.error[field].join(' ');
    }
  } else {
    errors.registration_id = err.message;
  }
  return errors;
}

export function* storeUserData({ email }: { email: string }) {
  yield setItems([{ key: AuthStoredKeys.email, value: email }]);
}

function* signUpWorker(action: ISignUpAction) {
  let response: IResponse<IAuthData>;
  const fcmToken = yield call(getFcmToken);

  try {
    response = yield call(api.auth.signUp, { ...action.payload, device_token: fcmToken });
  } catch (error) {
    const errors = transformSignUpError(error);
    yield action.meta?.onError?.(errors);
    yield put(authActions.setSignUpError(errors));
    return;
  }
  analytics.logEvent(analyticEvents.signUpCompleted, {
    companyCode: action.payload.registration_id.split('-')?.[1],
    timestamp: moment().utc().toISOString(),
  });
  yield storeUserData({ email: action.payload.email });
  yield put(authActions.setAuthData(response.data));
  yield storeAuthData(response.data);
  yield addToStoredLoginEmails(action.payload.email);
  yield addCodeSentAt();
  yield action.meta?.onSuccess?.(response);
}

function* signInWorker(action: ISignInAction) {
  let response: IResponse<IAuthData>;
  const fcmToken = yield call(getFcmToken);
  try {
    response = yield api.auth.signIn({
      email: action.email,
      password: action.password,
      device_token: fcmToken,
    });
  } catch (error) {
    yield action.meta?.onError?.(error);
    return;
  }
  yield put(authActions.signInSuccess(action.email, response.data, 'credentials', { onSuccess: action.meta?.onSuccess }));
}

function* signInSuccessWorker(action: ISignInSuccessAction) {
  const { email, authData, meta, method } = action;

  yield storeUserData({ email });
  yield incrementLoginCount(email);
  yield put(authActions.setAuthData(authData));
  analytics.logEvent(analyticEvents.login, {
    method: `via-${method}`,
    timestamp: moment().utc().toISOString(),
  });
  yield meta?.onSuccess?.();
  yield storeBiometricData(email, authData.refresh_token, authData.refresh_ttl);
}

export function* clearAuthDataWorker(action: IClearAuthDataAction) {
  yield removeItems([
    AuthStoredKeys.access_token,
    AuthStoredKeys.access_ttl,
    AuthStoredKeys.refresh_token,
    AuthStoredKeys.refresh_ttl,
  ]);
  yield action?.meta?.onSuccess();
}

function* forgotPasswordWorker(action: IForgotPasswordAction) {
  try {
    yield api.auth.forgotPassword({ credentials: action.email });
  } catch (error) {
    yield handleError(error);
    return;
  }
  yield addCodeSentAt();
  yield action.meta.onSuccess();
}

function* resetPasswordWorker(action: IResetPasswordAction) {
  const { credentials, code } = selectForgotPassword(getState());
  try {
    yield api.auth.resetPassword({
      code,
      credentials,
      password: action.password
    });
  } catch (error) {
    yield handleError(error);
    yield action.meta.onError(error);
    return;
  }
  action.meta?.onSuccess();
}

function* signOutWorker(action: ISignOutAction) {
  const email = selectUserEmail(getState());
  try {
    yield call(api.auth.signOut);
  } catch (error) {
    yield action?.meta?.onError?.();
  }
  yield put(authActions.clearAuthData());
  yield put(authActions.signedOut());
  yield action?.meta?.onSuccess?.();
}

export default function* authSagas(): SagaIterator {
  yield takeEvery(AuthActions.SIGN_UP, signUpWorker);
  yield takeEvery(AuthActions.SIGN_OUT, signOutWorker);
  yield takeEvery(AuthActions.SIGN_IN, signInWorker);
  yield takeEvery(AuthActions.SIGN_IN_SUCCESS, signInSuccessWorker);
  yield takeEvery(AuthActions.CLEAR_AUTH_DATA, clearAuthDataWorker);
  yield takeLatest(AuthActions.FORGOT_PASSWORD, forgotPasswordWorker);
  yield takeLatest(AuthActions.RESET_PASSWORD, resetPasswordWorker);
}
