import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ISurveyPage, ISurveyRatingQuestion } from '../types';
import useStyles from './styles';
import { RatingButton } from './RatingButton';

interface IRatingPage extends ISurveyPage, ISurveyRatingQuestion {}

export const RatingPage = (props: IRatingPage) => {
  const { title, onSelect, lowerBoundText, upperBoundText } = props;
  const [selected, setSelected] = useState<string>('');
  const values = ['1', '2', '3', '4', '5'];
  const styles = useStyles();

  const onPress = (rating: string) => {
    setSelected(rating);
    onSelect(rating);
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttons}>
        {values.map((rating) => (
          <RatingButton key={rating} onSelect={onPress} value={rating} checked={rating === selected} />
        ))}
      </View>
      <View style={styles.labels}>
        <Text style={styles.label}>{lowerBoundText}</Text>
        <Text style={styles.label}>{upperBoundText}</Text>
      </View>
    </View>
  );
};
