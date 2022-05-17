import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames, } from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import { selectSignUpData } from 'modules/auth/selectors';
import { setSignUpData } from 'modules/auth/actions';
import useStyles from './styles';
import ScreenWithAnimatedHeader from 'components/ScreenWithAnimatedHeader';
import InputInfo from 'components/InputInfo';
import Button from 'components/Button';

const vocab = vocabulary.get();
const schema = yup.string().email().required();

const EnterEmail = ({ route, navigation }: AppNavigationProps<AppScreenNames.EnterEmail>) => {
  const { params } = route;
  const dispatch = useDispatch();
  const styles = useStyles();
  const { email } = useSelector(selectSignUpData);

  const [inputError, setInputError] = useState('');
  useEffect(
    () => {
      setInputError(params?.backendError);
    },
    [params?.backendError]
  );

  const onPress = async () => {
    const isValid = await schema.isValid(email);
    if (!isValid) {
      setInputError(vocab.errorCheckEmail);
      return;
    }
    navigation.navigate(AppScreenNames.SetPasswordSignUp);
  };
  const handleOnChange = (value) => {
    if (inputError) setInputError('');
    dispatch(setSignUpData({ email: value.toLowerCase() }));
  };
  return (
    <ScreenWithAnimatedHeader>
      <View style={styles.formContainer}>
        <View>
          <Input
            name="email"
            label={vocab.email}
            placeholder={vocab.emailAddress}
            value={email}
            onChange={handleOnChange}
            error={inputError}
            autoComplete="email"
            type="email"
            textContentType="username"
            returnKeyType="done"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <InputInfo text={vocab.useWorkEmail} />
        </View>
        <Button onPress={onPress} >
          {vocab.continue}
        </Button>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default EnterEmail;
