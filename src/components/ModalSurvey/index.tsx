import React from 'react';
import ModalWrapper from '../ModalWrapper';
import { Pressable, Text, View } from 'react-native';
import Button from '../Button';
import { RatingPage } from './RatingPage';
import { RadioPage } from './RadioPage';
import { TextPage } from './TextPage';
import { useSurveyState } from './hooks';
import useStyles from './styles';
import IconInfoDark from '../IconInfoDark';
import vocab from 'i18n';

interface IModalSurveyProps {
  onClose: () => void;
}

export const ModalSurvey = (props: IModalSurveyProps) => {
  const { onClose } = props;
  const {
    pages, lastPage, currentPageIndex, onSubmit, onSkip, onSelect, submitDisabled,
  } = useSurveyState({ onClose });
  const styles = useStyles();

  const components = pages.map((surveyPage) => {
    let El = null;
    if (surveyPage.type === 'text') {
      El = TextPage;
    }
    if (surveyPage.type === 'radio') {
      El = RadioPage;
    }
    if (surveyPage.type === 'rating') {
      El = RatingPage;
    }
    return <El key={surveyPage.id} {...surveyPage} onSelect={onSelect} />;
  });

  return (
    <ModalWrapper onClose={onClose}>
      <View style={styles.header}>
        <IconInfoDark />
        <Text style={styles.headerText}>
          {vocab.get().question} {currentPageIndex + 1}/{pages.length}
        </Text>
      </View>
      <View>
        {components[currentPageIndex]}
      </View>
      <Button
        styles={styles.button}
        textStyles={styles.buttonText}
        onPress={onSubmit}
        disabled={submitDisabled}
      >
        {lastPage ? vocab.get().submit : vocab.get().next}
      </Button>
      <Pressable onPress={onSkip}>
        <Text style={styles.textButton}>{vocab.get().skip}</Text>
      </Pressable>
    </ModalWrapper>
  );
};
