import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { ISurveyPage, ISurveyTextQuestion } from '../types';
import useStyles from './styles';

interface ITextPage extends ISurveyTextQuestion, ISurveyPage {}

const maxLength = 200;

export const TextPage = (props: ITextPage) => {
  const { placeholder, title, onSelect } = props;
  const [length, setLength] = useState<number>(0);
  const [focus, setFocus] = useState<boolean>(false);
  const styles = useStyles();

  const onChangeText = (text) => {
    setLength(text.length);
    onSelect(text);
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        multiline
        editable
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[styles.input, focus ? styles.focus : {}]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        maxLength={maxLength}
      />
      <Text style={styles.textLength}>{length}/{maxLength}</Text>
    </View>
  );
};
