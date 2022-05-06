import { SurveyActionTypes } from '../actions';
import { ISurveyState, TSurveyActions } from '../types';

const defaultState: ISurveyState = {
  pages: [],
};

export default function surveyReducer (
  state = defaultState,
  action: TSurveyActions,
): ISurveyState {
  switch (action.type) {
    case SurveyActionTypes.GET_SURVEY_SUCCESS: {
      return {
        ...state,
        pages: action.payload,
      };
    }
    case SurveyActionTypes.CLEAR_SURVEYS: {
      return {
        ...defaultState,
      };
    }
    default:
      return state;
  }
};
