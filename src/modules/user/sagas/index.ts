import { call, put, all, fork, takeEvery, } from 'redux-saga/effects';
import api from 'services/api';
import * as actions from '../actions';
import { UserActions } from '../types';


export function* getUserInfoWorker() {
  const { data: { data: userData } } = yield call(api.userInfo);
  yield put(actions.userSetInfo(userData));
}

function* getUserInfoWatcher() {
  yield takeEvery(UserActions.USER_GET_INFO, getUserInfoWorker);
}

export default function* () {
  yield all([
    fork(getUserInfoWatcher),
  ]);
}