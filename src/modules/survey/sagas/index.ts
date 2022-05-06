import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { clearSurveys, getSurveysSuccess, SurveyActionTypes } from '../actions';
import api from 'services/api';
import { mapSurveyResponse } from '../utils';
import { successNotification } from '../../notifications/actions';
import { ISubmitSurveyQuestionAction } from '../types';

function* getSurveyWorker() {
  try {
    const response = yield call(api.employees.getSurveys);
    const survey = mapSurveyResponse(response);
    yield put(getSurveysSuccess(survey));
  } catch (e) {
    console.log('getSurveyWorker:error', e);
  }
}

function* submitSurveyQuestionWorker(action: ISubmitSurveyQuestionAction) {
  const { id, answer, lastPage } = action.payload;
  try {
    yield call(api.employees.submitSurvey, id, answer);
    if (lastPage) {
      yield put(clearSurveys());
      yield put(successNotification({ title: 'Thanks' }));
    }
  } catch (e) {
    console.log('submitSurveyQuestionWorker:error', e);
  }
}

export default function* surveySagas(): SagaIterator {
  yield takeEvery(SurveyActionTypes.GET_SURVEYS, getSurveyWorker);
  yield takeEvery(SurveyActionTypes.SUBMIT_SURVEY_QUESTION, submitSurveyQuestionWorker);
}
