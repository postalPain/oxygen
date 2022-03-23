import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForgotPasswordCode } from 'modules/auth/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import VerificationCode from 'screens/VerificationCode';
import { forgotPassword } from 'modules/auth/actions';
import { selectForgotPasswordCode, selectForgotPasswordEmail } from 'modules/auth/selectors';


const ForgotPasswordCode = (props: AppNavigationProps<any>) => {
  const { navigation, route } = props;
  const dispatch = useDispatch();

  const code = useSelector(selectForgotPasswordCode);

  return (
    <VerificationCode
      backendError={route.params?.backendError}
      resend={forgotPassword}
      code={code}
      onChange={(_code) => dispatch(setForgotPasswordCode(_code))}
      onSubmit={() => navigation.navigate(AppScreenNames.SetPasswordForgot) }
    />
  );
};

export default ForgotPasswordCode;