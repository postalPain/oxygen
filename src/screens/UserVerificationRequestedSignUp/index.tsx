import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';
import { UserVerificationRequested } from 'screens';

const UserVerificationRequestedSignUp = (props: AppNavigationProps<any>) => {
  const { navigation } = props;

  const onSubmit = () => {
    navigation.navigate(AppScreenNames.VerificationCodeSignUp);
  };

  return (
    <UserVerificationRequested onSubmit={onSubmit} />
  );
};

export default UserVerificationRequestedSignUp;