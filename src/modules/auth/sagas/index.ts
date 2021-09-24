import { call, put, takeEvery, } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import api from 'services/api';
import * as authActions from 'modules/auth/actions';
import { AuthActions } from 'modules/auth/types';
import * as appActions from 'modules/app/actions';
import * as notificationActions from 'modules/notifications/actions';
import { navigate } from 'navigation/utils';
import { AppScreenNames } from 'navigation/types';
import vocab from 'i18n';


function* handleError (error) {
  const errorMessage = error.message || vocab.get().somethingWentWrong;
  yield put(notificationActions.errorNotification(errorMessage));
};

export function* signOutWorker() {
  try {
    yield call(api.signOut);
    yield put(authActions.signedOut());
    yield put(appActions.appResetStore());
    yield navigate(AppScreenNames.Authentication);
    // TODO do we need to remove notification handling on sign out?
  } catch (e) {
    yield handleError(e);
  }
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(AuthActions.SIGN_OUT, signOutWorker);
}