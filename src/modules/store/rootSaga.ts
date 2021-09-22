import { all, fork } from 'redux-saga/effects';

import { sagas as userSagas } from '../user';
import { sagas as authSagas } from '../auth';
import { sagas as notificationsSagas } from '../notifications';

export default function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(userSagas),
    fork(notificationsSagas),
  ]);
};
