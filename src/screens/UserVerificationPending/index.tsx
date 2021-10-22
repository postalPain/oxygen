import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames, } from 'navigation/types';
import useInterval from 'utils/useInterval';
import { checkVerification } from 'modules/auth/actions';
import { IconCheck, Button } from 'components';
import useStyles from './styles';
import { errorNotification } from '../../modules/notifications/actions';

const vocab = vocabulary.get();

const UserVerificationPending = (
  { navigation }: AppNavigationProps<AppScreenNames.UserVerificationPending>
) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [emailVerified] = useState(true); // TODO take it from state
  const [userVerifiedByEmployer, setUserVerifiedByEmployer] = useState(false); // TODO take it from state
  const [userRejectedByEmployer, setUserRejectedByEmployer] = useState(false); // TODO take it from state
  const onPress = () => {
    navigation.navigate(AppScreenNames.SignIn);
  }
  useInterval(
    () => {
      dispatch(checkVerification({
        onSuccess: () => setUserVerifiedByEmployer(true),
        onError: () => dispatch(errorNotification({ text: vocab.somethingWentWrong })),
      }));
    },
    5 * 1000 * 60
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.steps}>
          <View style={styles.step}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.circle,
                  emailVerified ? styles.circleVerified : styles.circleNotVerified,
                ]}>
                {emailVerified
                  ? <IconCheck size={24} />
                  : null}
              </View>
              <View style={[styles.line, userVerifiedByEmployer && styles.lineDark]} />
            </View>
            <Text
              style={[
                styles.stepTitle,
                emailVerified && styles.stepTitleVerified
              ]}
            >
              {vocab.emailVerified}
            </Text>
          </View>
          <View style={styles.step}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.circle,
                  userVerifiedByEmployer ? styles.circleVerified : styles.circleNotVerified,
                ]}>
                {userVerifiedByEmployer
                  ? <IconCheck size={24} />
                  : null}
              </View>
            </View>
            <Text style={styles.stepTitle}>
              {vocab.employeeVerification}
            </Text>
            {!userVerifiedByEmployer
              ? (
                <View style={styles.stepTextWrapper}>
                  <Text style={styles.stepText}>
                    {vocab.waitingTime}{2}{vocab.days}
                  </Text>
                </View>
              ) : null}
          </View>
          
        </View>
        {!userVerifiedByEmployer
          ? (
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>
                {vocab.youWillReceiveEmail}
              </Text>
            </View>
            
          ) : null}
        {(emailVerified && userVerifiedByEmployer)
          ? (
            <Button onPress={onPress}>
              {vocab.continue}
            </Button>
          ) : null
        }
      </View>
    </SafeAreaView>
  );
};

export default UserVerificationPending;
