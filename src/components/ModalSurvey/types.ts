interface ISurveyBaseQuestion {
  title: string;
  type: 'radio' | 'rating' | 'text';
  id: number;
}

export interface ISurveyTextQuestion extends ISurveyBaseQuestion {
  type: 'text';
  placeholder: string;
}

export interface ISurveyRadioQuestion extends ISurveyBaseQuestion {
  type: 'radio';
  options: {
    text: string;
    value: string;
  }[];
}

export interface ISurveyRatingQuestion extends ISurveyBaseQuestion {
  type: 'rating';
  lowerBoundText: string;
  upperBoundText: string;
}

export type SurveyQuestion = ISurveyTextQuestion | ISurveyRadioQuestion | ISurveyRatingQuestion;
export type SurveyQuestions = SurveyQuestion[];

export interface ISurveyPage {
  onSelect: (answer: string) => void;
}
