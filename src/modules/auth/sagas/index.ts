import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import api, { IResponse } from 'services/api';
import * as authActions from 'modules/auth/actions';
import { clearSignUpData } from 'modules/auth/actions';
import {
  AuthActions,
  AuthStoredKeys,
  IAuthData,
  IClearAuthDataAction,
  IForgotPasswordAction,
  IResetPasswordAction,
  ISetAuthDataAction,
  ISignInAction,
  ISignOutAction,
  ISignUpAction,
} from 'modules/auth/types';
import { getState } from 'modules/store';
import * as notificationActions from 'modules/notifications/actions';
import { defaultSignUpErrors } from 'modules/auth/reducers';
import { selectForgotPassword } from 'modules/auth/selectors';
import { removeItems, setItems } from 'modules/asyncStorage';
import { checkVerification, userGetInfo } from 'modules/user/actions';
import { UserStoredKeys } from 'modules/user/types';
import { ERROR_CODES, IError } from 'services/api/errors';
import { setAuthHeader, removeHeader } from 'services/api/request';
import { storeAuthData } from '../asyncStorage';


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

export function* processUserData({ email }: { email: string }) {
  yield setItems([{ key: AuthStoredKeys.email, value: email }]);
}

function* signUpWorker(action: ISignUpAction) {
  let response;
  try {
    response = yield call(api.auth.signUp, action.payload);
  } catch (error) {
    const errors = transformSignUpError(error);
    yield action.meta?.onError?.(errors);
    yield put(authActions.setSignUpError(errors));
    return;
  }
  yield processUserData({ email: action.payload.email });
  yield put(authActions.setAuthData(response.data));
  yield put(clearSignUpData());
  yield put(checkVerification());
  yield action.meta?.onSuccess?.(response);
}

function* signInWorker(action: ISignInAction) {
  let response: IResponse<IAuthData>;
  try {
    response = yield api.auth.signIn({ email: action.email, password: action.password });
  } catch (error) {
    yield put(authActions.setSignInError(error));
    return;
  }
  yield processUserData({ email: action.email });
  yield put(authActions.setAuthData(response.data));
  yield put(authActions.signedIn(true));
}

export function* clearAuthDataWorker(action: IClearAuthDataAction) {
  yield removeItems([
    AuthStoredKeys.access_token,
    AuthStoredKeys.access_ttl,
    AuthStoredKeys.refresh_token,
    AuthStoredKeys.refresh_ttl,
    AuthStoredKeys.email,
    UserStoredKeys.first_name,
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

function* signInSuccessWorker () {
  yield put(userGetInfo());
}

function* signOutWorker(action: ISignOutAction) {
  try {
    yield call(api.auth.signOut);
    yield call(removeHeader, 'Authorization');
    yield put(authActions.signedOut());
    yield removeItems([
      AuthStoredKeys.access_token,
      AuthStoredKeys.access_ttl,
      AuthStoredKeys.refresh_token,
      AuthStoredKeys.refresh_ttl,
    ]);
    // TODO clear transactions
    yield action?.meta?.onSuccess?.();
  } catch (error) {
    yield handleError(error);
    yield action?.meta?.onError?.();
  }
}

function* setAuthDataWorker(action: ISetAuthDataAction) {
  yield setAuthHeader(action.payload.access_token);
  yield storeAuthData(action.payload);
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