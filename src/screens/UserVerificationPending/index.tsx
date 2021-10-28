import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames, } from 'navigation/types';
import { VerificationStatuses } from 'modules/user/types';
import { selectVerificationStatus } from 'modules/user/selectors';
import { checkVerification } from 'modules/user/actions';
import useInterval from 'utils/useInterval';
import { Button } from 'components';
import StatusIcon from './StatusIcon';
import useStyles from './styles';

const vocab = vocabulary.get();

const UserVerificationPending = (
  { navigation }: AppNavigationProps<AppScreenNames.UserVerificationPending>
) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const status = useSelector(selectVerificationStatus);
  const onPress = () => { navigation.navigate(AppScreenNames.SignIn); };
  useEffect(
    () => { dispatch(checkVerification()); },
    []
  );
  useInterval(
    () => { dispatch(checkVerification()); },
    5 * 1000 * 60
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.steps}>
          <View style={styles.step}>
            <View style={styles.progressBar}>
              <StatusIcon status="verified" />
              <View style={[styles.line, (status === VerificationStatuses.employer_verified) && styles.lineDark]} />
            </View>
            <Text
              style={[
                styles.stepTitle,
                styles.stepTitleVerified,
              ]}
            >
              {vocab.emailVerified}
            </Text>
          </View>
        <View style={styles.step}>
          <View style={styles.progressBar}>
            <StatusIcon
              status={(status === VerificationStatuses.employer_not_verified)
                ? 'rejected'
                : (status === VerificationStatuses.employer_verified)
                  ? 'verified' : 'pending'}
            />
          </View>
          <Text style={styles.stepTitle}>
            {vocab.employeeVerification}
          </Text>
          {(status === VerificationStatuses.email_verified)
            ? (
              <View style={styles.stepTextWrapper}>
                <Text style={styles.stepText}>
                  {vocab.waitingTime}{2}{vocab.days}
                </Text>
              </View>
            ) : null}
        </View>
      </View>
      {(status === VerificationStatuses.email_verified)
        && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              {vocab.youWillReceiveEmail}
            </Text>
          </View>
        
        )}
        {(status === VerificationStatuses.employer_not_verified) && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              {vocab.verificationUnsuccessful}
            </Text>
            <Text style={[styles.infoText, styles.infoTextCentered]}>
              {vocab.please}
              <Text style={[styles.infoText, styles.link]}>
                {vocab.contactUs}
              </Text>
            </Text>
          </View>
        )}
        {(status === VerificationStatuses.employer_verified) && (
          <Button onPress={onPress}>
            {vocab.continue}
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default UserVerificationPending;
