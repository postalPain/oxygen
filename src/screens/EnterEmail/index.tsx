import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as yup from 'yup';
import vocabulary from 'i18n';
import { AppScreenNames, SignUpNavigationProps, SignUpScreenNames } from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import {
  ScreenWithAnimatedHeader,
  Button, InputInfo,
} from 'components';
import useStyles from './styles';


const vocab = vocabulary.get();
let schema = yup.object().shape({
  email: yup.string().email().required(),
});

const EnterEmail = (
  { navigation }: SignUpNavigationProps<SignUpScreenNames.EnterEmail>
) => {
  const styles = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const onPress = async () => {
    const isValid = await schema.isValid({ email: inputValue });
    if (!isValid) {
      setInputError(vocab.errorCheckEmail);
      return;
    }
    navigation.navigate(AppScreenNames.SetPassword);
  }
  const handleOnChange = (value) => {
    if (inputError) setInputError('');
    setInputValue(value.toUpperCase());
  }
  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.formContainer}>
        <View>
          <Text style={[styles.inputLabel, inputError && styles.inputLabelError]}>
            {vocab.email}
          </Text>
          <Input
            style={styles.input}
            placeholder={vocab.emailAddress}
            value={inputValue}
            onChange={handleOnChange}
            error={inputError}
            autoComplete="email"
            keyboardType="email-address"
            textContentType="username"
          />
          <InputInfo text={vocab.useWorkEmail} />
        </View>
        <Button
          onPress={onPress}
          styles={styles.button}
        >
          {vocab.continue}
        </Button>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default EnterEmail;
