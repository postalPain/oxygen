import { setForgotPasswordCode } from 'modules/auth/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import VerificationCode from 'screens/VerificationCode';

const ForgotPasswordCode = (props: AppNavigationProps<any>) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const onSubmit = (code) => {
    dispatch(setForgotPasswordCode(code));
    navigation.navigate(AppScreenNames.SetPasswordForgot);
  };

  return (
    <VerificationCode {...props} onSubmit={onSubmit}/>  // eslint-disable-line
  );
};

export default ForgotPasswordCode;