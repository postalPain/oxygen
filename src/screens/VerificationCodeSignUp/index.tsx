import { verifyEmail } from 'modules/user/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import VerificationCode from 'screens/VerificationCode';

const VerificationCodeSignUp = (props: AppNavigationProps<any>) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const onSubmit = (code) => {
    dispatch(verifyEmail(code, () => navigation.navigate(AppScreenNames.UserVerificationPending)));
  };

  return (
    <VerificationCode onSubmit={onSubmit}/>  // eslint-disable-line
  );
};

export default VerificationCodeSignUp;