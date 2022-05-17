import React from 'react';
import { useDispatch } from 'react-redux';
import { setSignUpData } from 'modules/auth/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import SetPassword from 'components/SetPassword';

const SetPasswordSignUp = (props: AppNavigationProps<any>) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const onSubmit = (value) => {
    dispatch(setSignUpData({ password: value }));
    navigation.navigate(AppScreenNames.DataPrivacy);
  };

  return (
    <SetPassword {...props} onSubmit={onSubmit}/>  // eslint-disable-line
  );
};

export default SetPasswordSignUp;