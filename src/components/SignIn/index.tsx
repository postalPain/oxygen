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
import { selectSignedIn, selectSignInError } from 'modules/auth/selectors';
import { AuthStoredKeys } from 'modules/auth/types';
import { ERROR_CODES } from 'services/api/errors';
import { selectUserEmail } from 'modules/user/selectors';
import { getItem } from 'modules/asyncStorage';


const SignIn = (
  { navigation }: AppNavigationProps<AppScreenNames.SignIn>
) => {
  const dispatch = useDispatch();

  const error = useSelector(selectSignInError);
  const signedIn = useSelector(selectSignedIn);
  const storedEmail = useSelector(selectUserEmail);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();

  useEffect(() => {
    signedIn && getItem(AuthStoredKeys.firstLoginEmails)
      .then((firstLoginEmails) => {
        firstLoginEmails?.includes(email)
          ? navigation.navigate(AppScreenNames.UserInfoConfirmation)
          : navigation.navigate(AppScreenNames.TabNavigation);
      });
  }, [signedIn]);

  useEffect(() => {
    emailError && setEmailError(null);
  }, [email]);

  useEffect(() => {
    passwordError && setPasswordError(null);
  }, [password]);

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
    <>
      <View>
        <View>
          {!storedEmail && (
            <Input
              style={styles.input}
              name="email"
              label={vocab.get().email}
              onChange={(v) => setEmail(v.toLowerCase())}
              placeholder="Email"
              type="email"
              required
              error={emailError}
              returnKeyType='done'
            />
          )}
          <Input
            style={styles.input}
            name="password"
            label={vocab.get().password}
            onChange={setPassword}
            placeholder="Password"
            secure
            required
            error={passwordError}
            returnKeyType='done'
          />
          <Link
            style={styles.forgotPassword}
            onPress={() => {
              navigation.navigate(AppScreenNames.ForgotPassword);
              setEmailError(null);
              setPasswordError(null);
            }}
          >
            {vocab.get().forgotPassword}
          </Link>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Button onPress={() => {
          dispatch(signIn(email || storedEmail, password));
          setEmailError(null);
          setPasswordError(null);
        }}
        >{vocab.get().logIn}
        </Button>
      </View>
    </>
  );
};

export default SignIn;
