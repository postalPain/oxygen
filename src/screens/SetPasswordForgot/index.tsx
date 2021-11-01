import { resetPassword } from 'modules/auth/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { SetPassword } from 'screens';

const SetPasswordForgot = (props: AppNavigationProps<any>) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const onSubmit = (password) => {
    dispatch(resetPassword(password, {
      onSuccess: () => navigation.navigate(AppScreenNames.SignInForgot),
      onError: () => navigation.navigate(AppScreenNames.VerificationCodeForgot) // All errors will be displayed as transient messages
    }));
  };

  return (
    <SetPassword {...props} onSubmit={onSubmit}/>  // eslint-disable-line
  );
};

export default SetPasswordForgot;