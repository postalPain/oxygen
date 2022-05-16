import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { errorNotification } from 'modules/notifications/actions';
import { IMeta } from 'modules/store/types';
import CodeInput, { CODE_LENGTH } from 'components/CodeInput';
import styles from './styles';
import { selectSignUpCode } from 'modules/auth/selectors';
import { setSignUpCode } from 'modules/auth/actions';
import ScreenWithAnimatedHeader from 'components/ScreenWithAnimatedHeader';
import InfoText from 'components/InfoText';
import ResendEmail from 'components/ResendEmail';
import Button from 'components/Button';


const vocab = vocabulary.get();

interface IVerificationCode {
  code?: string;
  onChange?: (value: string) => void;
  onSubmit?: (code: string) => void;
  backendError?: string;
  resend?: (email: string, meta: IMeta) => {};
  loading?: boolean;
}

const VerificationCode = (props: IVerificationCode) => {
  const { backendError, resend } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    backendError && dispatch(errorNotification({ text: backendError }));
  }, [backendError]);

  return (
    <ScreenWithAnimatedHeader>
      <View style={styles.verificationCode}>
        <View>
          <CodeInput
            style={styles.codeInput}
            value={props.code}
            onChange={props.onChange}
          />
          <InfoText style={styles.infoBlock}>
            <Text style={styles.infoText}>{vocab.pleaseEnterCode}</Text>
          </InfoText>
        </View>
        <View style={styles.buttonsContainer}>
          {!!resend && <ResendEmail onPress={resend} />}
          <Button
            disabled={(props.code?.length !== CODE_LENGTH) || props.loading}
            onPress={() => props.onSubmit(props.code) }
          >
            {vocab.confirm}
          </Button>
        </View>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default VerificationCode;
