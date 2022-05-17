import ScreenWrapperForgotPasswordLogin from 'components/ScreenWrapperForgotPasswordLogin';
import SignIn from 'components/SignIn';
import React from 'react';

const ForgotPasswordSignIn = (props) => {
  return (
    <ScreenWrapperForgotPasswordLogin>
      <SignIn forgotPasswordMode {...props} />
    </ScreenWrapperForgotPasswordLogin>
  );
};

export default ForgotPasswordSignIn;