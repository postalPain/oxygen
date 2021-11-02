import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import {
  ScreenWithAnimatedHeader,
  Button,
  InputInfo,
} from 'components';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignUpData } from '../../modules/auth/selectors';
import { setSignUpData } from 'modules/auth/actions';


const vocab = vocabulary.get();

const EnterRegistrationId = (
  { navigation, route }: AppNavigationProps<AppScreenNames.EnterRegistrationId>
) => {
  const { params } = route;
  const styles = useStyles();
  const dispatch = useDispatch();
  const { registration_id } = useSelector(selectSignUpData);
  // const errors = useSelector(selectSignUpErrors);
  const [inputValue, setInputValue] = useState(registration_id);
  const [inputError, setInputError] = useState('');
  useEffect(
    () => {
      setInputError(params?.backendError);
    },
    [params?.backendError]
  );
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
    setInputValue(value);
  };
  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.formContainer}>
        <View>
          <Input
            placeholder={vocab.registrationId}
            label={vocab.registrationId}
            value={inputValue}
            onChange={handleOnChange}
            error={inputError}
          />
          <InputInfo text={vocab.shouldReceiveRegistrationId} />
        </View>
        <Button
          onPress={onPress}
          styles={styles.button}
        >
          {vocab.continue}
        </Button>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default EnterRegistrationId;
