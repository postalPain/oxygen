import { call, put, takeEvery, } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import api from 'services/api';
import * as actions from '../actions';
import { UserActions } from '../types';


export function* getUserInfoWorker() {
  const { data: { data: userData } } = yield call(api.userInfo);
  yield put(actions.userSetInfo(userData));
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(UserActions.USER_GET_INFO, getUserInfoWorker);
}