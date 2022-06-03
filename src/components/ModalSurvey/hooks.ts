import { useDispatch, useSelector } from 'react-redux';
import { selectSurveyData } from 'modules/auth/selectors';
import { useState } from 'react';
import { submitSurveyQuestion } from 'modules/survey/actions';

export const useSurveyState = ({ onClose }) => {
  const survey = useSelector(selectSurveyData);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<string>(null);
  const currentQuestionId = survey.pages[currentPageIndex]?.id;
  const lastPage = currentPageIndex === survey.pages.length - 1;
  const dispatch = useDispatch();

  const onSelect = (value: string) => {
    setCurrentAnswer(value);
  };

  const submitAnswer = (answer: string) => {
    dispatch(submitSurveyQuestion({
      id: currentQuestionId,
      lastPage,
      answer,
    }));
    setCurrentAnswer(null);
    if (lastPage) {
      onClose();
    } else {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const onSubmit = () => {
    submitAnswer(currentAnswer);
  };

  const onSkip = () => {
    submitAnswer(null);
  };

  return {
    currentPageIndex,
    pages: survey.pages,
    lastPage,
    submitDisabled: !currentAnswer,
    onSelect,
    onSubmit,
    onSkip,
  };
};
