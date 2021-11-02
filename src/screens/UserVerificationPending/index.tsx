import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { batch, useDispatch, useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames, } from 'navigation/types';
import { getItem } from 'modules/asyncStorage';
import { VerificationStatuses } from 'modules/user/types';
import { checkVerification, userClearInfo } from 'modules/user/actions';
import { clearAuthData } from 'modules/auth/actions';
import { selectVerificationStatus } from 'modules/user/selectors';
import useInterval from 'utils/useInterval';
import { Button, EmailTag, ResendEmail } from 'components';
import StatusIcon from './StatusIcon';
import useStyles from './styles';


const vocab = vocabulary.get();

const UserVerificationPending = (
  { navigation }: AppNavigationProps<AppScreenNames.UserVerificationPending>
) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const status = useSelector(selectVerificationStatus);
  const emailVerificationState = (status === VerificationStatuses.new) ? 'pending' : 'verified';
  const employerVerificationState = (status === VerificationStatuses.employer_not_verified)
    ? 'rejected'
    : (status === VerificationStatuses.employer_verified)
      ? 'verified' : 'pending';
  const onPress = () => navigation.navigate(AppScreenNames.SignIn);
  const [delay, setDelay] = useState(1000 * 60 * 5);
  const checkStatus = () => {
    dispatch(checkVerification({
      onSuccess: (verification_status) => {
        if (verification_status !== VerificationStatuses.email_verified) {
          setDelay(null); // set delay to null in order to clear interva
        }
      },
    }));
  };
  useEffect(() => {
    getItem('email').then((_email) => setEmail(_email));
    checkStatus();
  }, []);
  useInterval(() => checkStatus(), delay);
  const clearAuthAndUserData = () => {
    batch(() => {
      dispatch(clearAuthData());
      dispatch(userClearInfo());
    });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.steps}>
          <View style={styles.step}>
            <View
              style={[
                styles.progressBar,
                (emailVerificationState === 'verified') && styles.progressBarVerified,
              ]}
            >
              <StatusIcon status={emailVerificationState} />
              <View style={[styles.line]} />
            </View>
            <Text style={[styles.stepTitle]}>
              {vocab.emailVerification}
            </Text>
            <EmailTag onPress={clearAuthAndUserData} email={email} />
            {emailVerificationState === 'pending' && (
              <Text style={styles.stepText}>
                {vocab.weSentEmail}
              </Text>
            )}
            <View style={{ height: (emailVerificationState === 'verified') ? 42 : 22 }} />
          </View>
          <View style={styles.step}>
            <View
              style={[
                styles.progressBar,
                (employerVerificationState !== 'pending') && styles.progressBarVerified,
              ]}
            >
              <StatusIcon status={employerVerificationState} />
            </View>
            <Text style={styles.stepTitle}>
              {vocab.employeeVerification}
            </Text>
            {(status === VerificationStatuses.email_verified)
              ? (
                <>
                  <View style={styles.textHighlightedWrapper}>
                    <Text style={styles.textHighlighted}>
                      {vocab.waitingTime}{2}{vocab.days}
                    </Text>
                  </View>
                  <Text style={styles.stepText}>
                    {vocab.yourEmployerWillConfirm}
                  </Text>
                  <Text style={styles.stepText}>
                    {vocab.weWillNotifyYou}
                  </Text>
                </>
              ) : null
            }
            {(employerVerificationState === 'rejected') && (
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                  {vocab.verificationUnsuccessful}
                </Text>
                <Text style={[styles.infoText, styles.link]}>
                  {vocab.contactUs}
                </Text>
              </View>
            )}
            {employerVerificationState === 'verified' && (
              <Text style={styles.stepText}>
                {vocab.congratulationsVerification}
              </Text>
            )}
          </View>
        </View>
        {(employerVerificationState === 'verified') && (
          <Button onPress={onPress}>
            {vocab.getStarted}
          </Button>
        )}
        {(emailVerificationState === 'pending') && (
          <View style={styles.buttonsWrapper}>
            <ResendEmail email={email} />
            <Button onPress={() => navigation.navigate(AppScreenNames.VerificationCodeSignUp)}>
              {vocab.enterVerificationCode}
            </Button>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default UserVerificationPending;
