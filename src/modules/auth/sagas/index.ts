import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import api, { IResponse } from 'services/api';
import * as authActions from 'modules/auth/actions';
import {
  AuthActions,
  IAuthData,
  IClearAuthDataAction,
  ISignInAction,
  ISignUpAction,
  IForgotPasswordAction,
  IResetPasswordAction,
} from 'modules/auth/types';
import { navigate } from 'navigation/utils';
import { AppScreenNames } from 'navigation/types';
import { getState } from 'modules/store';
import * as appActions from 'modules/app/actions';
import * as notificationActions from 'modules/notifications/actions';
import { defaultSignUpErrors } from 'modules/auth/reducers';
import { selectForgotPassword } from 'modules/auth/selectors';
import { clearAuthData, clearSignUpData } from 'modules/auth/actions';
import { removeItems, setItems } from 'modules/asyncStorage';
import { ERROR_CODES, IError } from 'services/api/errors';
import { ISignUpPayload } from 'services/api/auth';


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

export function* processSignUpData(data: IAuthData) {
  const authData = Object.keys(data).reduce((acc, key) => {
    return [...acc, { key, value: data[key] }];
  }, []);
  yield setItems(authData);
}
export function* processAuthData(data: ISignUpPayload) {
  yield setItems([{ key: 'email', value: data.email }]);
  yield put(clearSignUpData());
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
  yield processAuthData(action.payload);
  yield processSignUpData(response.data);
  yield put(authActions.setAuthData(response.data));
  yield action.meta?.onSuccess?.(response);
}

function* signOutWorker() {
  try {
    yield call(api.auth.signOut);
    yield put(authActions.signedOut());
    yield put(appActions.appResetStore());
    yield navigate(AppScreenNames.Onboarding);
    // TODO do we need to remove notification handling on sign out?
  } catch (error) {
    yield handleError(error);
  }
}

function* signInWorker(action: ISignInAction) {
  let response: IResponse<IAuthData>;
  try {
    response = yield api.auth.signIn({ email: action.email, password: action.password });
  } catch (error) {
    yield put(authActions.setSignInError(error));
    return;
  }
  yield put(authActions.setAuthData(response.data));
}

export function* clearSignUpDataWorker(action: IClearAuthDataAction) {
  yield removeItems(['access_token', 'access_ttl', 'refresh_token', 'refresh_ttl', 'email']);
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

export default function* authWatcher(): SagaIterator {
  yield takeEvery(AuthActions.SIGN_UP, signUpWorker);
  yield takeEvery(AuthActions.SIGN_OUT, signOutWorker);
  yield takeEvery(AuthActions.SIGN_IN, signInWorker);
  yield takeEvery(AuthActions.CLEAR_AUTH_DATA, clearSignUpDataWorker);
  yield takeLatest(AuthActions.SIGN_IN, signInWorker);
  yield takeLatest(AuthActions.FORGOT_PASSWORD, forgotPasswordWorker);
  yield takeLatest(AuthActions.RESET_PASSWORD, resetPasswordWorker);
}