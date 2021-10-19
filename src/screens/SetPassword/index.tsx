import React, { useState } from 'react';
import { View } from 'react-native';
import * as yup from 'yup';
import vocabulary from 'i18n';
import {
  AppNavigationProps,
  AppScreenNames,
} from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import { Button, InputInfo, ScreenWithAnimatedHeader } from 'components';
import useStyles from './styles';
import usePasswordRequirements from 'utils/usePasswordRequirements';

const passwordRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/gm;

const vocab = vocabulary.get();
let schema = yup
  .string()
  .matches(passwordRequirements)
  .required();

const SetPassword = (
  { navigation }: AppNavigationProps<AppScreenNames.SetPassword>
) => {
  const styles = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const { requirementsLabels } = usePasswordRequirements(inputValue);
  const onPress = async () => {
    const isValid = await schema.isValid(inputValue);
    if (!isValid) {
      setInputError(vocab.errorPasswordNotMatch);
      return;
    }
    navigation.navigate(AppScreenNames.DataPrivacy);
  }
  const handleOnChange = (value) => {
    if (inputError) setInputError('');
    setInputValue(value);
  }
  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.formContainer}>
        <View>
          <Input
            name="password"
            label={vocab.createPassword}
            value={inputValue}
            onChange={handleOnChange}
            error={inputError}
            autoComplete="email"
            keyboardType="email-address"
            textContentType="username"
            secure
          />
          {requirementsLabels}
          <InputInfo text={vocab.createSecurePassword} />
        </View>
        <Button
          onPress={onPress}
          styles={styles.button}
        >
          {vocab.savePassword}
        </Button>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default SetPassword;
