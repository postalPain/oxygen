import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { ModalSurvey } from '../ModalSurvey';
import { useSelector } from 'react-redux';
import { selectSurveyData } from '../../modules/auth/selectors';

export const Survey = () => {
  const [surveyModal, setSurveyModal] = useState(false);
  const { pages } = useSelector(selectSurveyData);

  useEffect(() => {
    setSurveyModal(!!pages.length);
  }, [pages]);

  return (
    <>
      {surveyModal && (
        <Modal>
          <ModalSurvey onClose={() => setSurveyModal(false)} />
        </Modal>
      )}
    </>
  );
};
