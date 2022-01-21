import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import useInterval from 'utils/useInterval';
import vocabulary from 'i18n';
import { addCodeSentAt, deleteCodeSentAt, getCodeSentAt } from 'modules/auth/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import { selectForgotPasswordEmail } from 'modules/auth/selectors';
import { IMeta } from 'modules/store/types';
import Link from 'components/Link';
import useStyles from './styles';


const RESEND_IN_SEC = 31;

interface IResendEmailProps {
  style?: string;
  onPress: (email: string, meta: IMeta) => {};
}

const ResendEmail = ({ style, onPress }: IResendEmailProps) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const forgotPasswordEmail = useSelector(selectForgotPasswordEmail);
  const [seconds, setSeconds] = useState<number>(null);
  const resendEmail = () => {
    dispatch(onPress(email || forgotPasswordEmail, {
      onSuccess: () => {
        addCodeSentAt();
        setSeconds(RESEND_IN_SEC);
      }
    }));
  };
  useInterval(() => {
    if (seconds && (seconds >= 0)) setSeconds(seconds - 1);
    if (seconds === 1) deleteCodeSentAt();
  }, seconds ? 1000 : null);
  useEffect(
    () => {
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
              {seconds < 10 ? `0${seconds}` : seconds}
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
