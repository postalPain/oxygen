import ScreenWrapperLogin from 'components/ScreenWrapperLogin';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import vocab from 'i18n';
import Button from 'components/Button';
import Link from 'components/Link';
import styles from './styles';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'modules/auth/actions';
import { selectAuthData, selectAuthError } from 'modules/auth/selectors';
import { ERROR_CODES } from 'services/api/errors';

const SignIn = (
  { navigation }: AppNavigationProps<AppScreenNames.DataPrivacy>
) => {
  const dispatch = useDispatch();

  const authData = useSelector(selectAuthData);
  const authError = useSelector(selectAuthError);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();

  useEffect(() => {
    emailError && setEmailError(null);
  }, [email]);

  useEffect(() => {
    passwordError && setPasswordError(null);
  }, [password]);

  useEffect(() => {
    authData.access_token && navigation.navigate(AppScreenNames.Dashboard);
  }, [authData]);

  useEffect(() => {
    if (!authError) {
      return;
    }
    if (authError?.code === ERROR_CODES.validation) {
      authError.error['email'] && setEmailError(authError.error['email'][0]);
      authError.error['password'] && setPasswordError(authError.error['password'][0]);
    } else {
      setEmailError(authError.message);
    }
  }, [authError]);

  return (
    <ScreenWrapperLogin>
      <View>
        <View>
          <Input
            style={styles.input}
            name="password"
            label={vocab.get().email}
            onChange={setEmail}
            placeholder="Email"
            type="email"
            required
            error={emailError}
          />
          <Input
            style={styles.input}
            name="password"
            label={vocab.get().password}
            onChange={setPassword}
            placeholder="Password"
            secure
            required
            error={passwordError}
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
        <Button onPress={() => dispatch(signIn(email, password))}>{vocab.get().logIn}</Button>
        <Text style={styles.biometricLink}>{vocab.get().useYourFaceId}</Text>
      </View>
    </ScreenWrapperLogin>

  );
};

export default SignIn;
