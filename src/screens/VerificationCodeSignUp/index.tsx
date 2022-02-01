import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkVerification, verifyEmail } from 'modules/user/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import VerificationCode from 'screens/VerificationCode';
import { usePushNotifications } from 'modules/pushNotifications/hooks/usePushNotifications';
import { selectSignUpData } from 'modules/auth/selectors';

const VerificationCodeSignUp = (props: AppNavigationProps<any>) => {
  const { navigation, route } = props;
  const { requestPushes, pushNotRequested } = usePushNotifications();
  const dispatch = useDispatch();
  const signUpData = useSelector(selectSignUpData);
  const onSubmit = (code) => {
    dispatch(verifyEmail(code, () => {
      dispatch(checkVerification({
        onSuccess: async () => {
          pushNotRequested && await requestPushes(signUpData.email);
          navigation.navigate(AppScreenNames.UserVerificationPending);
        }
      }));
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