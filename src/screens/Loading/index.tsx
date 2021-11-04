import { getMultipleItems } from 'modules/asyncStorage';
import { setAuthData } from 'modules/auth/actions';
import { AuthStoredKeys } from 'modules/auth/types';
import { checkVerification } from 'modules/user/actions';
import { isPending } from 'modules/user/selectors';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Loading = ({ navigation }: AppNavigationProps<AppScreenNames>) => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      getMultipleItems([
        AuthStoredKeys.access_token,
        AuthStoredKeys.access_ttl,
        AuthStoredKeys.refresh_token,
        AuthStoredKeys.refresh_ttl,
        AuthStoredKeys.email,
      ]).then((_authData) => {
        dispatch(setAuthData(_authData));
        dispatch(checkVerification({
          onSuccess: (status) => {
            if (isPending(status)) {
              navigation.navigate(AppScreenNames.UserVerificationPending);
            } else {
              navigation.navigate(AppScreenNames.SignIn);
            }
          },
          onError: () => {
            navigation.navigate(AppScreenNames.Onboarding);
          }
        }));
      });
    },
    []
  );
  return (
    <></>
  );
};

export default Loading;