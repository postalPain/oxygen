import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import vocabulary from 'i18n';
import {
  AppNavigationProps,
  AppScreenNames,
} from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import { Button, InputInfo, ScreenWithAnimatedHeader } from 'components';
import usePasswordRequirements from 'utils/usePasswordRequirements';
import { selectSignUpData } from 'modules/auth/selectors';
import { setSignUpData } from 'modules/auth/actions';
import useStyles from './styles';


const vocab = vocabulary.get();

const SetPassword = (
  { navigation, route }: AppNavigationProps<AppScreenNames.SetPassword>
) => {
  const { params } = route;
  const styles = useStyles();
  const dispatch = useDispatch();
  const { password } = useSelector(selectSignUpData);
  const [inputValue, setInputValue] = useState(password);
  const [inputError, setInputError] = useState('');
  const { requirementsLabels, isPasswordMatched } = usePasswordRequirements(inputValue);
  useEffect(
    () => { setInputError(params?.backendError); },
    [params?.backendError]
  );
  const onPress = async () => {
    dispatch(setSignUpData({ password: inputValue }))
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
          disabled={!isPasswordMatched}
        >
          {vocab.savePassword}
        </Button>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default SetPassword;
