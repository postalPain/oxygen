import { takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { AppActions } from '../types';
import { AppState } from 'react-native';
import store from 'modules/store';
import { setAppState } from '../actions';

function* appInitWorker() {
  AppState.addEventListener('change', (state) => {
    store.dispatch(setAppState(state));
  });
}

export default function* appSagas(): SagaIterator {
  yield takeLatest(AppActions.APP_INIT, appInitWorker);
}