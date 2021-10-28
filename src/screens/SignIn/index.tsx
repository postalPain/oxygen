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
import { selectAuthData, selectSignInError } from 'modules/auth/selectors';
import { ERROR_CODES } from 'services/api/errors';

const SignIn = (
  { navigation }: AppNavigationProps<AppScreenNames.DataPrivacy>
) => {
  const dispatch = useDispatch();

  const authData = useSelector(selectAuthData);
  const error = useSelector(selectSignInError);

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
    if (!error) {
      return;
    }
    if (error?.code === ERROR_CODES.validation) {
      error.error['email'] && setEmailError(error.error['email'][0]);
      error.error['password'] && setPasswordError(error.error['password'][0]);
    } else {
      setEmailError(error.message);
      setPasswordError(error.message);
    }
  }, [error]);

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
        <Button onPress={() => {
          dispatch(signIn(email, password));
          setEmailError(null);
          setPasswordError(null);
        }}
        >{vocab.get().logIn}
        </Button>
        <Text style={styles.biometricLink}>{vocab.get().useYourFaceId}</Text>
      </View>
    </ScreenWrapperLogin>

  );
};

export default SignIn;
