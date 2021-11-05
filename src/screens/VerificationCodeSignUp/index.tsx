import React from 'react';
import { useDispatch } from 'react-redux';
import { checkVerification, verifyEmail } from 'modules/user/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import VerificationCode from 'screens/VerificationCode';

const VerificationCodeSignUp = (props: AppNavigationProps<any>) => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const onSubmit = (code) => {
    dispatch(verifyEmail(code, () => {
      dispatch(checkVerification({
        onSuccess: () => {
          navigation.navigate(AppScreenNames.UserVerificationPending);
        }
      }))
    }));
  };
  return (
    <VerificationCode
      backendError={route.params?.backendError}
      onSubmit={onSubmit}
    />
  );
};

export default VerificationCodeSignUp;