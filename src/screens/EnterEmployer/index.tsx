import React, { useState } from 'react';
import { Text, View } from 'react-native';
import vocabulary from 'i18n';
import { AppScreenNames, SignUpNavigationProps, SignUpScreenNames } from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import {
  ScreenWithAnimatedHeader,
  Button,
  InputInfo,
} from 'components';
import useStyles from './styles';


const vocab = vocabulary.get();

const EnterEmployer = (
  { navigation }: SignUpNavigationProps<SignUpScreenNames.EnterEmployer>
) => {
  const styles = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const onPress = () => {
    if (!inputValue) {
      setInputError(vocab.errorEnterEmployerId);
      return;
    }
    navigation.navigate(AppScreenNames.EnterEmail);
  }
  const handleOnChange = (value) => {
    if (inputError) setInputError('');
    setInputValue(value);
  }
  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.formContainer}>
        <View>
          <Text style={[styles.inputLabel, inputError && styles.inputLabelError]}>
            {vocab.registrationId}
          </Text>
          <Input
            placeholder={vocab.registrationId}
            value={inputValue}
            onChange={handleOnChange}
            inputBoxStyle={styles.input}
            error={inputError}
          />
          <InputInfo text={vocab.wouldReceiveRegistrationId} />
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

export default EnterEmployer;
