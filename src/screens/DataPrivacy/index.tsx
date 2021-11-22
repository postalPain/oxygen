import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from 'react-native-bouncy-checkbox';
import vocabulary from 'i18n';
import {
  AppNavigationProps,
  AppScreenNames,
} from 'navigation/types';
import { Text } from '@stryberventures/stryber-react-native-ui-components';
import { signUp } from 'modules/auth/actions';
import { selectSignUpData } from 'modules/auth/selectors';
import { checkVerification } from 'modules/user/actions';
import { openBrowser } from 'utils';
import { getWidth } from 'utils/window';
import env from 'env';
import theme from 'config/theme';
import { Button, Link, ScreenWithAnimatedHeader } from 'components';
import useStyles from './styles';
import { addToStoredLoginEmails } from 'modules/user/asyncStorage';


const vocab = vocabulary.get();

const DataPrivacy = (
  { navigation }: AppNavigationProps<AppScreenNames.DataPrivacy>
) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const signUpData = useSelector(selectSignUpData);
  const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const onPress = async () => {
    if (!checked) return;
    setButtonDisabled(true);
    dispatch(signUp(signUpData, {
      onSuccess: () => {
        dispatch(checkVerification({
          onSuccess: async () => {
            await addToStoredLoginEmails(signUpData.email);
            navigation.navigate(AppScreenNames.UserVerificationPending);
          }
        }));
      },
      onError: (error) => {
        setButtonDisabled(false);
        if (error?.registration_id) {
          navigation.navigate(
            AppScreenNames.EnterRegistrationId,
            { backendError: error.registration_id });
        }
        if (error?.email) {
          navigation.navigate(
            AppScreenNames.EnterEmail,
            { backendError: error.email });
        }
        if (error?.password) {
          navigation.navigate(
            AppScreenNames.SetPasswordSignUp,
            { backendError: error.password }
          );
        }
      },
    }));
  };
  const handleOnChange = (value) => setChecked(value);
  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            {vocab.dataPolicy}
          </Text>
          <Text style={styles.text}>
            {vocab.needConsent}
          </Text>
        </View>
        <View style={styles.consentBlock}>
          <View style={styles.checkboxWrapper}>
            <Checkbox
              size={getWidth(5.5)}
              fillColor={theme.colors.floos4}
              unfillColor={theme.colors.screenBackgroundColorLight}
              iconStyle={styles.checkbox}
              onPress={handleOnChange}
              isChecked={checked}
              iconComponent={<View style={styles.checkboxIcon} />}
            />
          </View>
          <View style={styles.checkboxLabelWrapper}>
            <Text style={styles.checkboxLabel}>
              {vocab.iHaveRead}
            </Text>
            <Link
              onPress={() => openBrowser(`${env.websiteDomain}/privacy-policy`)}
              style={styles.link}
            >
              {vocab.dataPolicy.toLowerCase()}
            </Link>
            <Text style={styles.checkboxLabel}>
              {vocab.guidelines}
            </Text>
          </View>
        </View>
        <Button
          onPress={onPress}
          disabled={!checked || buttonDisabled}
        >
          {vocab.next}
        </Button>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default DataPrivacy;
