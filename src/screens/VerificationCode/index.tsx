import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { errorNotification } from 'modules/notifications/actions';
import { IMeta } from 'modules/store/types';
import { Button, ScreenWithAnimatedHeader, InfoText, ResendEmail } from 'components';
import CodeInput, { CODE_LENGTH } from 'components/CodeInput';
import styles from './styles';
import { selectSignUpCode } from 'modules/auth/selectors';
import { setSignUpCode } from 'modules/auth/actions';


const vocab = vocabulary.get();

interface IVerificationCode {
  onSubmit: (code: string) => void;
  backendError: string;
  resend?: (email: string, meta: IMeta) => {};
}

const VerificationCode = ({ onSubmit, backendError, resend }: IVerificationCode) => {
  const dispatch = useDispatch();

  const code = useSelector(selectSignUpCode);

  useEffect(() => {
    backendError && dispatch(errorNotification({ text: backendError }));
  }, [backendError]);

  return (
    <ScreenWithAnimatedHeader>
      <View style={styles.verificationCode}>
        <View>
          <CodeInput
            style={styles.codeInput}
            value={code}
            onChange={(val) => dispatch(setSignUpCode(val))}
          />
          <InfoText style={styles.infoBlock}>
            <Text style={styles.infoText}>{vocab.pleaseEnterCode}</Text>
          </InfoText>
        </View>
        <View style={styles.buttonsContainer}>
          {!!resend && <ResendEmail onPress={resend} />}
          <Button
            disabled={code?.length !== CODE_LENGTH}
            onPress={() => onSubmit(code) }
          >
            {vocab.confirm}
          </Button>
        </View>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default VerificationCode;