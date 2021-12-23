import React from 'react';
import { useDispatch } from 'react-redux';
import { setForgotPasswordCode } from 'modules/auth/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import VerificationCode from 'screens/VerificationCode';
import { forgotPassword } from 'modules/auth/actions';


const ForgotPasswordCode = (props: AppNavigationProps<any>) => {
  const { navigation, route } = props;
  const dispatch = useDispatch();

  const onSubmit = (code) => {
    dispatch(setForgotPasswordCode(code));
    navigation.navigate(AppScreenNames.SetPasswordForgot);
  };

  return (
    <VerificationCode
      backendError={route.params?.backendError}
      onSubmit={onSubmit}
      resend={forgotPassword}
    />
  );
};

export default ForgotPasswordCode;