import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import vocabulary from 'i18n';
import {
  AppNavigationProps,
} from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import Button from 'components/Button';
import InputInfo from 'components/InputInfo';
import ScreenWithAnimatedHeader from 'components/ScreenWithAnimatedHeader';
import usePasswordRequirements from 'utils/usePasswordRequirements';
import { selectSignUpData } from 'modules/auth/selectors';
import useStyles from './styles';

const vocab = vocabulary.get();

interface ISetPassword extends AppNavigationProps<any> {
  onSubmit?: (value: string) => void;
}

const SetPassword = ({ route, onSubmit }: ISetPassword) => {
  const { params } = route;
  const styles = useStyles();
  const { password } = useSelector(selectSignUpData);
  const [inputValue, setInputValue] = useState(password);
  const [inputError, setInputError] = useState('');
  const { requirementsLabels, isPasswordMatched } = usePasswordRequirements(inputValue);
  useEffect(
    () => {
      setInputError(params?.backendError);
    },
    [params?.backendError]
  );
  const onPress = async () => {
    onSubmit(inputValue);
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
            name="password"
            label={vocab.createPassword}
            value={inputValue}
            onChange={handleOnChange}
            autoComplete="email"
            keyboardType="email-address"
            textContentType="username"
            secure
            returnKeyType='done'
          />
          {requirementsLabels}
          <InputInfo text={vocab.createSecurePassword} />
        </View>
        <Button
          onPress={onPress}
          styles={styles.button}
          disabled={!isPasswordMatched}
        >
          {vocab.savePassword}
        </Button>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default SetPassword;
