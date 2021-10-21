import { call, put, takeEvery, } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import api from 'services/api';
import * as authActions from 'modules/auth/actions';
import { AuthActions, ISignUpAction } from 'modules/auth/types';
import * as appActions from 'modules/app/actions';
import * as notificationActions from 'modules/notifications/actions';
import { navigate } from 'navigation/utils';
import { AppScreenNames } from 'navigation/types';
import vocab from 'i18n';
import { defaultSignUpErrors } from 'modules/auth/reducers';


function* handleError (error) {
  const errorMessage = {
    text: error.fallback_message || vocab.get().somethingWentWrong
  };
  yield put(notificationActions.errorNotification(errorMessage));
}

function transformSignUpError (err) {
  const errors = { ...defaultSignUpErrors };
  if (err?.code) {
    errors.registration_id = err.fallback_message;
  } else {
    for (let field in err) {
      errors[field] = err[field].join(' ');
    }
  }
  return errors;
}


function* signUpWorker(action: ISignUpAction) {
  try {
    const response = yield call(api.signUp, action.payload);
    yield action.meta?.onSuccess?.(response);
  } catch (error) {
    const errors = transformSignUpError(error);
    yield action.meta?.onError?.(errors);
    yield put(authActions.setSignUpError(errors))
  
  }
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

export default function* userWatcher(): SagaIterator {
  yield takeEvery(AuthActions.SIGN_OUT, signOutWorker);
  yield takeEvery(AuthActions.SIGN_UP, signUpWorker);
}