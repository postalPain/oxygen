import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import useInterval from 'utils/useInterval';
import vocabulary from 'i18n';
import { resendVerificationCode } from 'modules/user/actions';
import Link from 'components/Link';
import { addCodeSentAt, deleteCodeSentAt, getCodeSentAt } from 'modules/auth/asyncStorage';
import useStyles from './styles';


const RESEND_IN_SEC = 31;

interface IResendEmailProps {
  email?: string;
  afterSignUp?: boolean;
  style?: string;
}

const ResendEmail = ({ email, afterSignUp, style }: IResendEmailProps) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState<number>(null);
  const resendEmail = () => {
    dispatch(resendVerificationCode(email, {
      onSuccess: () => {
        addCodeSentAt();
        setSeconds(RESEND_IN_SEC);
      }
    }));
  };
  useInterval(() => {
    if (seconds && (seconds >= 0)) {
      setSeconds(seconds - 1)
    }
  }, seconds ? 1000 : null);
  
  useEffect(
    () => {
      if (afterSignUp) {
        addCodeSentAt();
        setSeconds(RESEND_IN_SEC);
        return;
      }
      getCodeSentAt().then((ts) => {
        const validTill = moment(ts).add(RESEND_IN_SEC, 's');
        const diff = validTill.diff(moment(), 'seconds');
        if (diff <= 0) {
          deleteCodeSentAt();
        } else {
          setSeconds(diff);
        }
      });
    },
    []
  );

  return (
    <View>
      {seconds
        ? (
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {vocabulary.get().resendCodeIn}
            </Text>
            <Text style={[styles.text, styles.time]}>
              {seconds < 10 ? `0${seconds}`: seconds}
            </Text>
          </View>
          
        )
        : (
          <Link
            onPress={resendEmail}
            style={[styles.link, style]}
          >
            {vocabulary.get().sendEmailAgain}
          </Link>
        )}
    </View>
  );
};

export default ResendEmail;
