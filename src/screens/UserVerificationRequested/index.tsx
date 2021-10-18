import React from 'react';
import { Text, View } from 'react-native';
import vocab from 'i18n';
import {
  AppNavigationProps,
  AppScreenNames,
} from 'navigation/types';
import { Button } from '@stryberventures/stryber-react-native-ui-components';

const UserVerificationRequested = (
  { navigation }: AppNavigationProps<AppScreenNames.UserVerificationRequested>
) => {
  const onPress = () => {
    navigation.navigate(AppScreenNames.UserVerificationPending);
  }
  return (
    <View>
      <Text>UserVerificationRequested</Text>
      <Button onPress={onPress}>
        {vocab.get().ok}
      </Button>
    </View>
  );
};

export default UserVerificationRequested;
