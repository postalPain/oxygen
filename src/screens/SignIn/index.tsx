import ScreenWrapperLogin from 'components/ScreenWrapperLogin';
import React from 'react';
import { Text, View } from 'react-native';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import vocab from 'i18n';
import Button from 'components/Button';
import Link from 'components/Link';
import styles from './styles';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';

const SignIn = (
  { navigation }: AppNavigationProps<AppScreenNames.DataPrivacy>
) => {
  return (
    <ScreenWrapperLogin>
      <View>
        <View>
          <Input
            style={styles.input}
            name="password"
            label={vocab.get().email}
            // value={values.email}
            // onChange={handleChange}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            style={styles.input}
            name="password"
            label={vocab.get().password}
            // value={values.email}
            // onChange={handleChange}
            placeholder="Password"
            secure
            required
          />
          <Link
            style={styles.forgotPassword}
            onPress={() => navigation.navigate(AppScreenNames.ForgotPassword)}
          >
            {vocab.get().forgotPassword}
          </Link>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Button>{vocab.get().logIn}</Button>
        <Text style={styles.biometricLink}>{vocab.get().useYourFaceId}</Text>
      </View>
    </ScreenWrapperLogin>

  );
};

export default SignIn;
