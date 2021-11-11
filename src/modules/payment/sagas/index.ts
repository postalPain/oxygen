import { call, put, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { PaymentActions } from '../types';

function* testWorker (action) {

}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(PaymentActions.test, testWorker);
}