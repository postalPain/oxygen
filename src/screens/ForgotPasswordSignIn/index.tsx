import ScreenWrapperForgotPasswordLogin from 'components/ScreenWrapperForgotPasswordLogin';
import React from 'react';
import { SignIn } from 'components';

const ForgotPasswordSignIn = (props) => {
  return (
    <ScreenWrapperForgotPasswordLogin>
      <SignIn forgotPasswordMode {...props} />
    </ScreenWrapperForgotPasswordLogin>
  );
};

export default ForgotPasswordSignIn;