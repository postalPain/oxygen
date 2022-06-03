import { SurveyQuestions } from 'components/ModalSurvey/types';
import {
  IClearSurveysAction,
  IGetSurveySuccessAction,
  ISubmitSurveyQuestionAction,
  ISubmitSurveyQuestionPayload
} from '../types';

export const enum SurveyActionTypes {
  GET_SURVEYS = 'GET_SURVEYS',
  GET_SURVEY_SUCCESS = 'GET_SURVEY_SUCCESS',
  SUBMIT_SURVEY_QUESTION = 'SUBMIT_SURVEY_QUESTION',
  CLEAR_SURVEYS = 'CLEAR_SURVEYS',
}

export const getSurveys = () => ({
  type: SurveyActionTypes.GET_SURVEYS,
});

export const getSurveysSuccess = (payload: SurveyQuestions): IGetSurveySuccessAction => ({
  type: SurveyActionTypes.GET_SURVEY_SUCCESS,
  payload,
});

export const submitSurveyQuestion = (payload: ISubmitSurveyQuestionPayload): ISubmitSurveyQuestionAction => ({
  type: SurveyActionTypes.SUBMIT_SURVEY_QUESTION,
  payload,
});

export const clearSurveys = (): IClearSurveysAction => ({
  type: SurveyActionTypes.CLEAR_SURVEYS,
});
