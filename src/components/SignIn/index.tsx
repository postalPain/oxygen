import React, { useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import vocab from 'i18n';
import Button from 'components/Button';
import Link from 'components/Link';
import styles from './styles';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'modules/auth/actions';
import { ERROR_CODES, IError } from 'services/api/errors';
import { isUserEmployerVerified, selectUserEmail } from 'modules/user/selectors';
import { checkVerification, userGetInfo } from 'modules/user/actions';
import { errorNotification } from 'modules/notifications/actions';
import { VerificationStatuses } from 'modules/user/types';
import BiometricLogin from 'components/BiometricLogin';
import env from 'env';
import { usePushSettings } from 'modules/pushNotifications/hooks/usePushSettings';
import { testIds } from '../../config/testIds';
import { selectAuthData } from 'modules/auth/selectors';
import { CommonActions } from '@react-navigation/native';

interface ISignIn extends AppNavigationProps<AppScreenNames.SignIn>{
  forgotPasswordMode?: boolean;
}

const SignIn = (props: ISignIn) => {
  const { navigation, forgotPasswordMode } = props;
  const dispatch = useDispatch();

  const storedEmail = useSelector(selectUserEmail);

  const { pushNotRequested, requestPushes } = usePushSettings();

  const [error, setError] = useState<IError>(null);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [signedIn, setSignedIn] = useState<boolean>(false);

  useEffect(() => {
    emailError && setEmailError(null);
    passwordError && setPasswordError(null);
    password === '  dbg' && env.dev && navigation.navigate(AppScreenNames.Debug);
  }, [email, password]);

  useEffect(() => {
    if (!error) {
      setEmailError(null);
      setPasswordError(null);
    }
    if (error?.code === ERROR_CODES.validation) {
      error.error['email'] && setEmailError(error.error['email'][0]);
      error.error['password'] && setPasswordError(error.error['password'][0]);
    }
    if (error?.message) {
      dispatch(errorNotification(error.message));
    }
  }, [error]);

  const onSignIn = () => {
    dispatch(checkVerification({
      onSuccess: async (status: VerificationStatuses) => {
        dispatch(userGetInfo());
        pushNotRequested && await requestPushes(email);
        navigation.dispatch(CommonActions.reset({
          index: 1,
          routes: [ {
            name: isUserEmployerVerified(status)
              ? AppScreenNames.AuthorizedStack
              : AppScreenNames.UserVerificationPending
          } ],
        })
        );
      },
      onError: () => {
        dispatch(errorNotification({ text: vocab.get().somethingWentWrong }));
      }
    }));
  };

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
              placeholder={vocab.get().emailAddress}
              type="email"
              required
              error={emailError}
              autoCorrect={false}
              returnKeyType='done'
              autoCapitalize="none"
              testID={testIds.loginEmailInput}
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
            testID={testIds.loginPasswordInput}
          />
          <View style={styles.forgotPasswordContainer}>
            {!forgotPasswordMode && (
              <Link
                style={styles.forgotPassword}
                onPress={() => {
                  navigation.navigate(AppScreenNames.ForgotPassword);
                  setError(null);
                }}
              >
                {vocab.get().forgotPassword}
              </Link>
            )}
          </View>
        </View>
      </View>
      <View style={[styles.buttonSection, !!storedEmail && styles.buttonSectionExistingUser]}>
        <Button
          onPress={() => {
            setButtonDisabled(true);
            Keyboard.dismiss();
            dispatch(signIn(email || storedEmail, password, {
              onSuccess: () => {
                setSignedIn(true);
                setButtonDisabled(false);
              },
              onError: (_error) => {
                setError(_error);
                setButtonDisabled(false);
              }
            }));
            setError(null);
          }}
          disabled={buttonDisabled}
        >
          {vocab.get().logIn}
        </Button>
        <BiometricLogin
          onSignedIn={onSignIn}
          signedIn={signedIn}
        />
      </View>
    </>
  );
};

export default SignIn;
