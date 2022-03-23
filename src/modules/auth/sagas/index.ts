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
import { setAuthHeader, removeHeader } from 'services/api/request';
import { storeAuthData } from '../asyncStorage';
import { addToStoredLoginEmails, incrementLoginCount } from 'modules/user/asyncStorage';
import { storeBiometricData } from 'modules/biometrics/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import { IResponse } from '../../../services/api/types';
import { analyticEvents, analytics } from '../../../services/analytics';


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
  try {
    response = yield call(api.auth.signUp, action.payload);
  } catch (error) {
    const errors = transformSignUpError(error);
    yield action.meta?.onError?.(errors);
    yield put(authActions.setSignUpError(errors));
    return;
  }
  analytics.logEvent(analyticEvents.signUpCompleted, {
    companyCode: action.payload.registration_id.split('-')?.[1],
    timestamp: new Date().toISOString(),
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
  try {
    response = yield api.auth.signIn({ email: action.email, password: action.password });
  } catch (error) {
    yield action.meta?.onError?.(error);
    return;
  }
  yield put(authActions.signInSuccess(action.email, response.data, { onSuccess: action.meta?.onSuccess }));
}

function* signInSuccessWorker(action: ISignInSuccessAction) {
  yield storeUserData({ email: action.email });
  yield incrementLoginCount(action.email);
  yield storeBiometricData(action.email, action.authData.refresh_token, action.authData.refresh_ttl);
  yield put(authActions.setAuthData(action.authData));
  yield action.meta?.onSuccess?.();
}

export function* clearAuthDataWorker(action: IClearAuthDataAction) {
  yield removeItems([
    AuthStoredKeys.access_token,
    AuthStoredKeys.access_ttl,
    AuthStoredKeys.refresh_token,
    AuthStoredKeys.refresh_ttl,
  ]);
  removeHeader('Authorization');
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
  yield call(removeHeader, 'Authorization');
  yield put(authActions.signedOut());
  yield action?.meta?.onSuccess?.();
}

function* setAuthDataWorker(action: ISetAuthDataAction) {
  yield setAuthHeader(action.payload.access_token);
}

export default function* authWatcher(): SagaIterator {
  yield takeEvery(AuthActions.SIGN_UP, signUpWorker);
  yield takeEvery(AuthActions.SIGN_OUT, signOutWorker);
  yield takeEvery(AuthActions.SIGN_IN, signInWorker);
  yield takeEvery(AuthActions.SIGN_IN_SUCCESS, signInSuccessWorker);
  yield takeEvery(AuthActions.CLEAR_AUTH_DATA, clearAuthDataWorker);
  yield takeLatest(AuthActions.FORGOT_PASSWORD, forgotPasswordWorker);
  yield takeLatest(AuthActions.RESET_PASSWORD, resetPasswordWorker);
  yield takeLatest(AuthActions.SET_AUTH_DATA, setAuthDataWorker);
}
