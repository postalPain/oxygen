import ScreenWrapperLogin from 'components/ScreenWrapperLogin';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';
import { SignIn } from 'screens';

const SignInRegular = (props: AppNavigationProps<AppScreenNames.SignIn>) => {
  return (
    <ScreenWrapperLogin>
      <SignIn {...props} />
    </ScreenWrapperLogin>
  );
};

export default SignInRegular;