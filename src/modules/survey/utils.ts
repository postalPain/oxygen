import { ISurveyQuestionResponse } from 'services/api/employees/types';
import { SurveyQuestions } from 'components/ModalSurvey/types';
import { IResponse } from 'services/api/types';
import vocab from 'i18n';

export const mapSurveyResponse = (response: IResponse<ISurveyQuestionResponse[]>): SurveyQuestions => {
  const lang = vocab.getLanguage();

  return response.data.map((question) => {
    const { id, details: { options, title, placeholder, min_label, max_label }, type } = question;
    return {
      id,
      type,
      title: title[lang],
      ...(type === 'radio' && {
        options: options.map(({ text, value }) => ({
          value,
          text: text[lang],
        }))
      }),
      ...(type === 'rating' && { upperBoundText: max_label[lang], lowerBoundText: min_label[lang] }),
      ...(type === 'text' && { placeholder: placeholder[lang] }),
    };
  });
};
