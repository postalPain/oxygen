import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames, } from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import {
  ScreenWithAnimatedHeader,
  Button,
  InputInfo,
} from 'components';
import { selectSignUpData } from 'modules/auth/selectors';
import { setSignUpData } from 'modules/auth/actions';
import useStyles from './styles';


const vocab = vocabulary.get();
let schema = yup.string().email().required();

const EnterEmail = (
  { navigation, route }: AppNavigationProps<AppScreenNames.EnterEmail>
) => {
  const { params } = route;
  const styles = useStyles();
  const dispatch = useDispatch();
  const { email } = useSelector(selectSignUpData);
  const [inputValue, setInputValue] = useState(email);
  const [inputError, setInputError] = useState('');
  useEffect(
    () => { setInputError(params?.backendError); },
    [params?.backendError]
  );
  const onPress = async () => {
    const isValid = await schema.isValid(inputValue);
    if (!isValid) {
      setInputError(vocab.errorCheckEmail);
      return;
    }
    dispatch(setSignUpData({ email: inputValue }))
    navigation.navigate(AppScreenNames.SetPassword);
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
            name="email"
            label={vocab.email}
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
