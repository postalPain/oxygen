import ScreenWrapperForgotPasswordLogin from 'components/ScreenWrapperForgotPasswordLogin';
import React from 'react';
import { SignIn } from 'screens';

const ForgotPasswordSignIn = (props) => {
  return (
    <ScreenWrapperForgotPasswordLogin>
      <SignIn {...props} />
    </ScreenWrapperForgotPasswordLogin>
  );
};

export default ForgotPasswordSignIn;