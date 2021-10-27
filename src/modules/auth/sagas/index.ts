import { call, put, takeEvery, } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import api, { IResponse } from 'services/api';
import * as authActions from 'modules/auth/actions';
import { AuthActions, IAuthData, ISignInAction, ISignUpAction } from 'modules/auth/types';
import * as appActions from 'modules/app/actions';
import * as notificationActions from 'modules/notifications/actions';
import { navigate } from 'navigation/utils';
import { AppScreenNames } from 'navigation/types';
import vocab from 'i18n';
import { defaultSignUpErrors } from 'modules/auth/reducers';
import { ERROR_CODES, IError } from 'services/api/errors';

function* handleError (error: IError) {
  yield put(authActions.setAuthError(error));
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

function* signUpWorker(action: ISignUpAction) {
  let response;
  try {
    response = yield call(api.signUp, action.payload);
  } catch (error) {
    const errors = transformSignUpError(error);
    yield action.meta?.onError?.(errors);
    yield put(authActions.setSignUpError(errors));
    return;
  }
  yield put(authActions.setAuthData(response.data));
  yield action.meta?.onSuccess?.(response);
}

export function* signOutWorker() {
  try {
    yield call(api.signOut);
    yield put(authActions.signedOut());
    yield put(appActions.appResetStore());
    yield navigate(AppScreenNames.Onboarding);
    // TODO do we need to remove notification handling on sign out?
  } catch (error) {
    yield handleError(error);
  }
}

export function* signInWorker(action: ISignInAction) {
  yield put(authActions.setAuthError(null));

  let response: IResponse<IAuthData>;
  try {
    response = yield api.signIn({ email: action.email, password: action.password });
  } catch (error) {
    yield handleError(error);
    return;
  }

  yield put(authActions.setAuthData(response.data));
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(AuthActions.SIGN_OUT, signOutWorker);
  yield takeEvery(AuthActions.SIGN_UP, signUpWorker);
  yield takeEvery(AuthActions.SIGN_IN, signInWorker);
}