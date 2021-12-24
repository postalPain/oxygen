import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import {
  ScreenWithAnimatedHeader,
  Button,
  InputInfo,
  Link,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignUpData } from 'modules/auth/selectors';
import { setSignUpData } from 'modules/auth/actions';
import useStyles from './styles';
import { openBrowser } from 'utils';
import externalUrls from 'config/externalUrls';

const vocab = vocabulary.get();

const EnterRegistrationId = (
  { navigation, route }: AppNavigationProps<AppScreenNames.EnterRegistrationId>
) => {
  const { params } = route;
  const styles = useStyles();
  const dispatch = useDispatch();
  const { registration_id } = useSelector(selectSignUpData);
  const [inputValue, setInputValue] = useState(registration_id);
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

  const onPress = () => {
    if (!inputValue) {
      setInputError(vocab.errorEnterEmployeeId);
      return;
    }
    dispatch(setSignUpData({ registration_id: inputValue }));
    navigation.navigate(AppScreenNames.EnterEmail);
  };
  const handleOnChange = (value) => {
    if (inputError) setInputError('');
    setInputValue(value.toUpperCase());
  };
  return (
    <ScreenWithAnimatedHeader>
      <View style={styles.formContainer}>
        <View>
          <Input
            placeholder={vocab.registrationId}
            label={vocab.registrationId}
            value={inputValue}
            onChange={handleOnChange}
            error={inputError}
            returnKeyType='done'
            autoCorrect={false}
            autoCapitalize="characters"
          />
          <InputInfo text={vocab.shouldReceiveRegistrationId} />
        </View>
        <View>
          { cantFind && (
            <Link
              onPress={() => openBrowser(externalUrls.findMyEmployer)}
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
