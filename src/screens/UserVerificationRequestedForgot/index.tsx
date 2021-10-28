import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';
import { UserVerificationRequested } from 'screens';

const UserVerificationRequestedForgot = (props: AppNavigationProps<any>) => {
  const { navigation } = props;

  const onSubmit = () => {
    navigation.navigate(AppScreenNames.VerificationCodeForgot);
  };

  return (
    <UserVerificationRequested onSubmit={onSubmit} />
  );
};

export default UserVerificationRequestedForgot;