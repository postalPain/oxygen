import { all, fork } from 'redux-saga/effects';

import withdrawalSagas from 'modules/withdrawal/sagas';
import biometricsSagas from 'modules/biometrics/sagas';
import notificationSagas from 'modules/notifications/sagas';
import transactionsSagas from 'modules/transactions/sagas';
import authSagas from 'modules/auth/sagas';
import userSagas from 'modules/user/sagas';
import appSagas from 'modules/app/sagas';

export default function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(userSagas),
    fork(notificationSagas),
    fork(withdrawalSagas),
    fork(transactionsSagas),
    fork(biometricsSagas),
    fork(appSagas),
  ]);
};
