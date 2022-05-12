import { SurveyQuestions } from 'components/ModalSurvey/types';
import { SurveyActionTypes } from './actions';

export interface ISurveyState {
  pages: SurveyQuestions;
}

export interface ISubmitSurveyQuestionPayload {
  id: number;
  answer: string;
  lastPage: boolean;
}

export interface IGetSurveySuccessAction {
  type: SurveyActionTypes.GET_SURVEY_SUCCESS;
  payload: SurveyQuestions;
}

export interface ISubmitSurveyQuestionAction {
  type: SurveyActionTypes.SUBMIT_SURVEY_QUESTION;
  payload: ISubmitSurveyQuestionPayload;
}

export interface IClearSurveysAction {
  type: SurveyActionTypes.CLEAR_SURVEYS;
}

export type TSurveyActions = IGetSurveySuccessAction | ISubmitSurveyQuestionAction | IClearSurveysAction;
