import { Button, ScreenWithAnimatedHeader } from 'components';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import { isEmailValid } from 'utils/validate';
import { useDispatch } from 'react-redux';
import { forgotPassword, setForgotPasswordEmail } from 'modules/auth/actions';


const ForgotPassword = (
  { navigation }: AppNavigationProps<AppScreenNames.ForgotPassword>
) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.screenContainer}>
        <View>
          <Text style={styles.forgotPassword}>{vocab.get().forgotPassword}</Text>
          <Text style={styles.enterEmail}>{vocab.get().enterEmailForgotPassword}</Text>
          <Input
            style={styles.emailInput}
            name="email"
            label={vocab.get().email}
            onChange={setEmail}
            placeholder="Email"
            type="email"
            required
            returnKeyType='done'
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