import { setSignUpData } from 'modules/auth/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { EnterEmail } from 'screens';

const EnterEmailSignUp = (props: AppNavigationProps<any>) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const onSubmit = (email) => {
    dispatch(setSignUpData({ email }));
    navigation.navigate(AppScreenNames.SetPasswordSignUp);
  };

  return (
    <EnterEmail {...props} onSubmit={onSubmit}/>  // eslint-disable-line
  );
};

export default EnterEmailSignUp;