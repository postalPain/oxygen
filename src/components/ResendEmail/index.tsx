import React from 'react';
import { useDispatch } from 'react-redux';
import vocabulary from 'i18n';
import { Link } from 'components';
import useStyles from './styles';
import { resendVerificationCode } from 'modules/user/actions';


interface IResendEmailProps {
  email?: string;
  style?: string;
}

const ResendEmail = ({ email, style }: IResendEmailProps) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const resendEmail = () => {
    dispatch(resendVerificationCode(email));
  };
  return (
    <Link
      onPress={resendEmail}
      style={[styles.link, style]}
    >
      {vocabulary.get().sendEmailAgain}
    </Link>
  );
};

export default ResendEmail;
