import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { isEmailValid } from 'utils/validate';
import { forgotPassword, setForgotPasswordEmail } from 'modules/auth/actions';
import { selectForgotPasswordEmail } from 'modules/auth/selectors';
import { Button, ScreenWithAnimatedHeader } from 'components';
import styles from './styles';


const ForgotPassword = (
  { navigation }: AppNavigationProps<AppScreenNames.ForgotPassword>
) => {
  const dispatch = useDispatch();
  const forgotPasswordEmail = useSelector(selectForgotPasswordEmail);
  const [email, setEmail] = useState('');

  return (
    <ScreenWithAnimatedHeader>
      <View style={styles.screenContainer}>
        <View>
          <Text style={styles.forgotPassword}>{vocab.get().forgotPassword}</Text>
          <Text style={styles.enterEmail}>{vocab.get().enterEmailForgotPassword}</Text>
          <Input
            style={styles.emailInput}
            name="email"
            label={vocab.get().email}
            onChange={setEmail}
            placeholder={vocab.get().emailAddress}
            type="email"
            required
            autoCorrect={false}
            returnKeyType='done'
            autoCapitalize="none"
            value={email || forgotPasswordEmail}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => dispatch(forgotPassword(email, {
              onSuccess: () => {
                dispatch(setForgotPasswordEmail(email));
                navigation.navigate(AppScreenNames.ForgotPasswordRequested);
              }
            }))}
            disabled={!isEmailValid(email)}
          >{vocab.get().send}
          </Button>
        </View>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default ForgotPassword;