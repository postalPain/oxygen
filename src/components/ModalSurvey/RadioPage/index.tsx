import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ISurveyPage, ISurveyRadioQuestion } from '../types';
import useStyles from './styles';
import { RadioButton } from './RadioButton';

interface IRadioPage extends ISurveyPage, ISurveyRadioQuestion {}

export const RadioPage = (props: IRadioPage) => {
  const { options, title, onSelect } = props;
  const styles = useStyles();
  const [selected, setSelected] = useState<string>('');

  const onPress = (value: string) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        {options.map(({ text, value }) => (
          <RadioButton
            label={text}
            key={value}
            value={value}
            checked={value === selected}
            onSelect={onPress}
          />
        ))}
      </View>
    </View>
  );
};
