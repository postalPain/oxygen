import React from 'react';
import { Text, View } from 'react-native';
import vocab from 'i18n';
import { AppScreenNames, SignUpNavigationProps, SignUpScreenNames } from 'navigation/types';
import { Button } from '@stryberventures/stryber-react-native-ui-components';

const UserVerificationPending = (
  { navigation }: SignUpNavigationProps<SignUpScreenNames.UserVerificationPending>
) => {
  const onPress = () => {
    navigation.navigate(AppScreenNames.SignIn);
  }
  return (
    <View>
      <Text>UserVerificationPending</Text>
      <Button onPress={onPress}>
        {vocab.get().logIn}
      </Button>
    </View>
  );
};

export default UserVerificationPending;
