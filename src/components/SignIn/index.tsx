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
import { isUserEmployerVerified, selectUserEmail } from 'modules/user/selectors';
import { existsInStoredLoginEmails, getLoginCount, resetLoginCount } from 'modules/user/asyncStorage';
import { checkVerification, userGetInfo } from 'modules/user/actions';
import { errorNotification } from 'modules/notifications/actions';
import { VerificationStatuses } from 'modules/user/types';
import DialogBiometricPermissions from 'components/DialogBiometricPermissions';
import { getBiometricsAllowed, storeBiometricsAllowed } from 'modules/biometrics/asyncStorage';
import BiometricLogin from 'components/BiometricLogin';


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

  useEffect(() => {
    emailError && setEmailError(null);
    passwordError && setPasswordError(null);
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
      setEmailError(error.message);
      setPasswordError(error.message);
    }
  }, [error]);

  const onSignedIn = () => {
    dispatch(checkVerification({
      onSuccess: (status: VerificationStatuses) => {
        dispatch(userGetInfo());

        if (!isUserEmployerVerified(status)) {
          navigation.navigate(AppScreenNames.UserVerificationPending);
        } else {
          existsInStoredLoginEmails(storedEmail).then(exists => {
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
      <View style={[styles.buttonSection, !!storedEmail && styles.buttonSectionExistingUser]}>
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
        <BiometricLogin />
      </View>
    </>
  );
};

export default SignIn;
