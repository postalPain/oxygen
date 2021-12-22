import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import vocabulary from 'i18n';
import { errorNotification } from 'modules/notifications/actions';
import { Button, ScreenWithAnimatedHeader, InfoText, ResendEmail } from 'components';
import CodeInput, { CODE_LENGTH } from 'components/CodeInput';
import styles from './styles';


const vocab = vocabulary.get();

interface IVerificationCode {
  onSubmit: (code: string) => void;
  backendError: string;
}

const VerificationCode = ({ onSubmit, backendError }: IVerificationCode) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  useEffect(() => {
    backendError && dispatch(errorNotification({ text: backendError }));
  }, [backendError]);
  return (
    <ScreenWithAnimatedHeader>
      <View style={styles.verificationCode}>
        <View>
          <CodeInput
            style={styles.codeInput}
            onChange={setValue}
          />
          <InfoText style={styles.infoBlock}>
            <Text style={styles.infoText}>{vocab.pleaseEnterCode}</Text>
          </InfoText>
        </View>
        <View style={styles.buttonsContainer}>
          <ResendEmail />
          <Button
            disabled={value.length !== CODE_LENGTH}
            onPress={() => onSubmit(value) }
          >
            {vocab.confirm}
          </Button>
        </View>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default VerificationCode;