import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignUpData } from 'modules/auth/selectors';
import { setSignUpData } from 'modules/auth/actions';
import useStyles from './styles';
import { openBrowser } from 'utils';
import externalUrls from 'config/externalUrls';
import useInviteUserDeepLink from 'modules/user/deepLinks/useInviteDeepLink';
import { testIds } from 'config/testIds';
import { analyticEvents, analytics } from '../../services/analytics';
import ScreenWithAnimatedHeader from 'components/ScreenWithAnimatedHeader';
import InputInfo from 'components/InputInfo';
import Link from 'components/Link';
import Button from 'components/Button';

const vocab = vocabulary.get();

const EnterRegistrationId = (
  { navigation, route }: AppNavigationProps<AppScreenNames.EnterRegistrationId>
) => {
  const { params } = route;
  const styles = useStyles();
  const dispatch = useDispatch();
  const { registration_id } = useSelector(selectSignUpData);
  const [inviteRegistrationId, inviteEmail] = useInviteUserDeepLink();
  const [inputError, setInputError] = useState('');
  const [cantFind, setCantFind] = useState<boolean>(null);

  useEffect(
    () => {
      setInputError(params?.backendError);
    },
    [params?.backendError]
  );

  useEffect(() => {
    setTimeout(() => setCantFind(true), 10000);
  }, []);

  useEffect(() => {
    inviteRegistrationId && dispatch(setSignUpData({
      registration_id: inviteRegistrationId,
      email: inviteEmail
    }));
  }, [inviteRegistrationId, inviteEmail]);

  const onPress = () => {
    if (!registration_id) {
      setInputError(vocab.errorEnterEmployeeId);
      return;
    }
    navigation.navigate(AppScreenNames.EnterEmail);
  };
  const handleOnChange = (value) => {
    if (inputError) setInputError('');
    dispatch(setSignUpData({ registration_id: value.toUpperCase() }));
  };
  const linkOnPress = () => {
    analytics.logEvent(analyticEvents.cantFindRegistrationId, {
      source: inputError ? 'after-error' : 'after-delay',
      inputValue: registration_id,
    });
    openBrowser(externalUrls.findMyEmployer);
  };
  return (
    <ScreenWithAnimatedHeader>
      <View style={styles.formContainer}>
        <View>
          <Input
            placeholder={vocab.registrationId}
            label={vocab.registrationId}
            value={registration_id}
            onChange={handleOnChange}
            error={inputError}
            returnKeyType='done'
            autoCorrect={false}
            autoCapitalize="characters"
            testID={testIds.registrationIdInput}
          />
          <InputInfo text={vocab.shouldReceiveRegistrationId} />
        </View>
        <View style={styles.buttonContainer}>
          { cantFind && (
            <Link
              onPress={linkOnPress}
              style={styles.link}
            >
              {vocab.cantFindRegistrationId}
            </Link>
          )}
          <Button onPress={onPress} >
            {vocab.continue}
          </Button>
        </View>

      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default EnterRegistrationId;
