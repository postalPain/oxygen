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
import { Button, ScreenWithAnimatedHeader } from 'components';
import { signUp } from 'modules/auth/actions';
import { selectSignUpData } from 'modules/auth/selectors';
import theme from 'config/theme';
import useStyles from './styles';
import { checkVerification } from '../../modules/user/actions';


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
        setButtonDisabled(false);
        navigation.navigate(AppScreenNames.UserVerificationPending);
        dispatch(checkVerification());
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
            {vocab.dataPrivacy}
          </Text>
          <Text style={styles.text}>
            {vocab.needConsent}
          </Text>
        </View>
        <View style={styles.consentBlock}>
          <View style={styles.checkboxWrapper}>
            <Checkbox
              size={22}
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
            <Text style={styles.link}>
              {vocab.dataPrivacy.toLowerCase()}
            </Text>
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
