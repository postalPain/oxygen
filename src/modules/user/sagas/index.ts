import { takeEvery, } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { UserActions } from '../types';


export function* getUserInfoWorker() {
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(UserActions.USER_GET_INFO, getUserInfoWorker);
}