import { setSignUpData } from 'modules/auth/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { SetPassword } from 'screens';

const SetPasswordForgot = (props: AppNavigationProps<any>) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const onSubmit = (value) => {
    dispatch(setSignUpData({ password: value }));
    navigation.navigate(AppScreenNames.SignInForgot);
  };

  return (
    <SetPassword {...props} onSubmit={onSubmit}/>  // eslint-disable-line
  );
};

export default SetPasswordForgot;