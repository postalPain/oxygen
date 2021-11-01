import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, ScreenWithAnimatedHeader, InfoText, Link } from 'components';
import CodeInput, { CODE_LENGTH } from 'components/CodeInput';
import vocabulary from 'i18n';
import { setVerificationStatus, verifyEmail } from 'modules/user/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React, { useEffect, useState } from 'react';
import { getItem, removeItems } from 'modules/asyncStorage';
import styles from './styles';


const vocab = vocabulary.get();

const VerificationCode = (
  { navigation }: AppNavigationProps<AppScreenNames.VerificationCode>
) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [value, setValue] = useState('');
  useEffect(
    () => {
      getItem('email').then((v) => setEmail(v));
    },
    []
  );
  const clearUserData = async () => {
    dispatch(setVerificationStatus(null));
    await removeItems(['access_token', 'access_ttl', 'refresh_token', 'refresh_ttl', 'email']).then(() => {
      navigation.navigate(AppScreenNames.Onboarding);
    });
  };
  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.verificationCode}>
        <View>
          <CodeInput
            style={styles.codeInput}
            onChange={setValue}
          />
          <InfoText>
            <View>
              <Text>{vocab.pleaseEnterCode}</Text>
              <Text>{email}</Text>
              <Link onPress={clearUserData} style={styles.link}>
                <Text>{vocab.wrongEmail}</Text>
              </Link>
            </View>
          </InfoText>
        </View>
        <View>
          <Link style={styles.link}>{vocab.sendEmailAgain}</Link>
          <Button
            disabled={value.length !== CODE_LENGTH}
            onPress={() => dispatch(
              verifyEmail(value, () => navigation.navigate(AppScreenNames.UserVerificationPending))
            )}
          >
            {vocab.confirm}
          </Button>
        </View>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default VerificationCode;