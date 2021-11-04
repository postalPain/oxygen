import React from 'react';
import ScreenWrapperLogin from 'components/ScreenWrapperLogin';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { SignIn } from 'components';

const SignInRegular = (props: AppNavigationProps<AppScreenNames.SignIn>) => {
  return (
    <ScreenWrapperLogin>
      <SignIn {...props} />
    </ScreenWrapperLogin>
  );
};

export default SignInRegular;