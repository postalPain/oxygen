import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import vocab from 'i18n';
import Button from 'components/Button';
import Link from 'components/Link';
import styles from './styles';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'modules/auth/actions';
import { ERROR_CODES, IError } from 'services/api/errors';
import { isUserEmployerVerified, selectUserEmail, selectUserStatusError, selectVerificationStatus } from 'modules/user/selectors';
import { existsInStoredLoginEmails } from 'modules/user/asyncStorage';
import { checkVerification, userGetInfo } from 'modules/user/actions';
import { errorNotification } from 'modules/notifications/actions';
import { VerificationStatuses } from 'modules/user/types';

const SignIn = (
  { navigation }: AppNavigationProps<AppScreenNames.SignIn>
) => {
  const dispatch = useDispatch();

  const storedEmail = useSelector(selectUserEmail);

  const [error, setError] = useState<IError>(null);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const onSignedIn = () => {
    dispatch(checkVerification({
      onSuccess: (status: VerificationStatuses) => {
        dispatch(userGetInfo());

        if (!isUserEmployerVerified(status)) {
          navigation.navigate(AppScreenNames.UserVerificationPending);
        } else {
          existsInStoredLoginEmails(email).then(exists => {
            exists
              ? navigation.navigate(AppScreenNames.UserInfoConfirmation)
              : navigation.navigate(AppScreenNames.TabNavigation);
          });
        }
      },
      onError: () => {
        dispatch(errorNotification({ text: vocab.get().somethingWentWrong }));
      }
    }));
  };

  useEffect(() => {
    emailError && setEmailError(null);
  }, [email]);

  useEffect(() => {
    passwordError && setPasswordError(null);
  }, [password]);

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
              placeholder={vocab.get().emailAddress}
              type="email"
              required
              error={emailError}
              autoCorrect={false}
              returnKeyType='done'
              autoCapitalize="none"
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
              setError(null);
            }}
          >
            {vocab.get().forgotPassword}
          </Link>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Button
          onPress={() => {
            setButtonDisabled(true);
            dispatch(signIn(email || storedEmail, password, {
              onSuccess: onSignedIn,
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
      </View>
    </>
  );
};

export default SignIn;
