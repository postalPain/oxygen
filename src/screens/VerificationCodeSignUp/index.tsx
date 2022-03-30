import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkVerification, verifyEmail } from 'modules/user/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import VerificationCode from 'screens/VerificationCode';
import { usePushSettings } from 'modules/pushNotifications/hooks/usePushNotifications';
import { selectSignUpCode, selectSignUpCodeLoading, selectSignUpData } from 'modules/auth/selectors';
import { setSignUpCode } from 'modules/auth/actions';

const VerificationCodeSignUp = (props: AppNavigationProps<any>) => {
  const { navigation, route } = props;

  const { requestPushes, pushNotRequested } = usePushSettings();
  const dispatch = useDispatch();

  const code = useSelector(selectSignUpCode);
  const codeLoading = useSelector(selectSignUpCodeLoading);
  const signUpData = useSelector(selectSignUpData);

  const onSubmit = (_code) => {
    dispatch(verifyEmail(_code, () => {
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
      code={code}
      onChange={(_code) => dispatch(setSignUpCode(_code))}
      onSubmit={onSubmit}
      loading={codeLoading}
    />
  );
};

export default VerificationCodeSignUp;