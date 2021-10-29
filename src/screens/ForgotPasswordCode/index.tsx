import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';
import VerificationCode from 'screens/VerificationCode';

const ForgotPasswordCode = (props: AppNavigationProps<any>) => {
  const { navigation } = props;

  const onSubmit = (code) => {
    navigation.navigate(AppScreenNames.SetPasswordForgot);
  };

  return (
    <VerificationCode onSubmit={onSubmit}/>  // eslint-disable-line
  );
};

export default ForgotPasswordCode;