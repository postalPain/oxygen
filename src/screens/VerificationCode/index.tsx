import { Button, ScreenWithAnimatedHeader } from 'components';
import CodeInput, { CODE_LENGTH } from 'components/CodeInput';
import InfoText from 'components/InfoText';
import Link from 'components/Link';
import vocab from 'i18n';
import { errorNotification } from 'modules/notifications/actions';
import { AppNavigationProps } from 'navigation/types';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';

interface IVerificationCode extends AppNavigationProps<any>{
  onSubmit: (code: string) => void;
}

const VerificationCode = ({ onSubmit, route }: IVerificationCode) => {
  const { params } = route;

  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  useEffect(() => {
    params?.backendError && dispatch(errorNotification({ text: params.backendError }));
  }, [params?.backendError]);

  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.verificationCode}>
        <View>
          <CodeInput
            style={styles.codeInput}
            onChange={setValue}
          />
          <InfoText>{vocab.get().pleaseEnterCode}</InfoText>
        </View>
        <View>
          <Link style={styles.link}>{vocab.get().sendEmailAgain}</Link>
          <Button
            disabled={value.length !== CODE_LENGTH}
            onPress={() => onSubmit(value) }
          >
            {vocab.get().confirm}
          </Button>
        </View>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default VerificationCode;