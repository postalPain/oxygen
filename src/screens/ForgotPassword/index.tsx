import { Button, ScreenWithAnimatedHeader } from 'components';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import { isEmailValid } from 'utils/validate';

const ForgotPassword = (
  { navigation }: AppNavigationProps<AppScreenNames.ForgotPassword>
) => {
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
          />
        </View>
        <View>
          <Button
            onPress={() => {
              navigation.navigate(AppScreenNames.UserVerificationRequestedForgot);
            }}
            disabled={!isEmailValid(email)}
          >{vocab.get().send}
          </Button>
        </View>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default ForgotPassword;