import { delay, put, takeEvery } from 'redux-saga/effects';
import { removeNotification } from 'modules/notifications/actions';
import { NotificationActions } from 'modules/notifications/types';
import { SagaIterator } from '@redux-saga/core';


function* handleAddNotification(action) {
  yield delay(action.payload.timeout);
  yield put(removeNotification(action.payload.id));
}

export default function* notificationSagas(): SagaIterator {
  yield takeEvery(NotificationActions.ADD_NOTIFICATION, handleAddNotification);
}