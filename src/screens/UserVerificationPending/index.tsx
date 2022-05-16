import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Pressable } from 'react-native';
import { batch, useDispatch, useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames, } from 'navigation/types';
import { getItem } from 'modules/asyncStorage';
import { VerificationStatusesFe } from 'modules/user/types';
import { checkVerification, userClearInfo, resendVerificationCode } from 'modules/user/actions';
import { clearAuthData, clearSignUpData } from 'modules/auth/actions';
import { selectEmailVerified, selectEmployerVerifiedStatus, } from 'modules/user/selectors';
import useInterval from 'utils/useInterval';
import StatusIcon from './StatusIcon';
import useStyles from './styles';
import { getHeight } from 'utils/window';
import { openBrowser } from 'utils';
import { AuthStoredKeys } from 'modules/auth/asyncStorage';
import externalUrls from 'config/externalUrls';
import { analyticEvents } from '../../services/analytics';
import useSignUpCodeDeepLink from 'modules/auth/deepLinks/useSignUpCodeDeepLink';
import EmailTag from 'components/EmailTag';
import Button from 'components/Button';
import ResendEmail from 'components/ResendEmail';


const vocab = vocabulary.get();

const UserVerificationPending = (
  { navigation, }: AppNavigationProps<AppScreenNames.UserVerificationPending>
) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [codeDeepLink] = useSignUpCodeDeepLink();


  const emailVerified = useSelector(selectEmailVerified);
  const employerVerificationState = useSelector(selectEmployerVerifiedStatus);

  const employerVerified = employerVerificationState === VerificationStatusesFe.verified;
  const employerPending = employerVerificationState === VerificationStatusesFe.pending;
  const employerRejected = employerVerificationState === VerificationStatusesFe.rejected;

  const onPress = () => {
    navigation.navigate(AppScreenNames.UserInfoConfirmation, { noBackButton: true });
  };

  const [delay, setDelay] = useState(1000 * 60 * .5);

  useInterval(() => {
    employerPending ? dispatch(checkVerification()) : setDelay(null); // set delay to null in order to clear interval
  }, delay);

  useEffect(() => {
    getItem(AuthStoredKeys.email).then(setEmail);
  }, []);

  useEffect(() => {
    codeDeepLink && !emailVerified && navigation.navigate(AppScreenNames.VerificationCodeSignUp);
  }, [codeDeepLink]);

  const clearAuthAndUserData = () => {
    navigation.navigate(AppScreenNames.Onboarding);
    batch(() => {
      dispatch(clearAuthData());
      dispatch(userClearInfo());
      dispatch(clearSignUpData());
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
                emailVerified && styles.progressBarVerified,
              ]}
            >
              <StatusIcon status={emailVerified ? VerificationStatusesFe.verified : VerificationStatusesFe.pending} />
              <View style={[styles.line]} />
            </View>
            <Text style={[styles.stepTitle]}>
              {vocab.emailVerification}
            </Text>
            <EmailTag onPress={clearAuthAndUserData} email={email} />
            {!emailVerified && (
              <Text style={styles.stepText}>
                {vocab.weSentEmail}
              </Text>
            )}
            <View style={{ height: emailVerified ? getHeight(6) : getHeight(2) }} />
          </View>
          <View style={styles.step}>
            <View
              style={[
                styles.progressBar,
                !employerPending && styles.progressBarVerified,
              ]}
            >
              <StatusIcon status={employerVerificationState} />
            </View>
            <Text style={styles.stepTitle}>
              {vocab.employeeVerification}
            </Text>
            {emailVerified && employerPending
              ? (
                <>
                  <View style={styles.textHighlightedWrapper}>
                    <Text style={styles.textHighlighted}>
                      {vocab.waitingTime} 2 {vocab.days}
                    </Text>
                  </View>
                  <Text style={styles.stepText}>
                    {vocab.yourEmployerWillConfirm}
                  </Text>
                  <Text style={styles.stepText}>
                    {vocab.weWillNotifyYou}
                  </Text>
                </>
              ) : null}
            {employerRejected && (
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                  {vocab.verificationUnsuccessful}
                </Text>
                <Pressable
                  onPress={() => openBrowser(externalUrls.help, { name: analyticEvents.helpViewed, sourceScreen: 'UserVerificationPending' })}
                >
                  <Text style={[styles.infoText, styles.link]}>
                    {vocab.contactUs}
                  </Text>
                </Pressable>
              </View>
            )}
            {employerVerified && (
              <Text style={styles.stepText}>
                {vocab.congratulationsVerification}
              </Text>
            )}
          </View>
        </View>
        {employerVerified && (
          <Button onPress={onPress}>
            {vocab.getStarted}
          </Button>
        )}
        {!emailVerified && (
          <View style={styles.buttonsWrapper}>
            <ResendEmail onPress={resendVerificationCode} />
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
