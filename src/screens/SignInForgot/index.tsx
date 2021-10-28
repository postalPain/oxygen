import ScreenWrapperLoginForgot from 'components/ScreenWrapperLoginForgot';
import React from 'react';
import { SignIn } from 'screens';

const SignInForgot = (props) => {
  return (
    <ScreenWrapperLoginForgot>
      <SignIn {...props} />
    </ScreenWrapperLoginForgot>
  );
};

export default SignInForgot;