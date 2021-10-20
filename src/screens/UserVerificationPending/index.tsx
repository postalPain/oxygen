import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames, } from 'navigation/types';
import { IconCheck, Button } from 'components';
import useStyles from './styles';

const vocab = vocabulary.get();

const UserVerificationPending = (
  { navigation }: AppNavigationProps<AppScreenNames.UserVerificationPending>
) => {
  const styles = useStyles();
  const [emailVerified] = useState(true); // TODO take it from state
  const [userVerifiedByEmployer] = useState(true); // TODO take it from state
  const onPress = () => {
    navigation.navigate(AppScreenNames.SignIn);
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.steps}>
          <View style={styles.step}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.circle,
                  emailVerified && styles.circleVerified,
                ]}>
                {emailVerified
                  ? <IconCheck size={24} />
                  : null}
              </View>
              <View style={styles.line} />
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
                <Text style={styles.stepText}>
                  {vocab.waitingTime}{2}{vocab.days}
                </Text>
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
            (
              <Button onPress={onPress}>
                {vocab.continue}
              </Button>
            )
          ) : null
        }
      </View>
    </SafeAreaView>
  );
};

export default UserVerificationPending;
