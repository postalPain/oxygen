import React from 'react';
import { Text, View } from 'react-native';
import vocab from 'i18n';
import { AppScreenNames, SignUpNavigationProps, SignUpScreenNames } from 'navigation/types';
import { Button } from '@stryberventures/stryber-react-native-ui-components';


const SetPassword = (
  { navigation }: SignUpNavigationProps<SignUpScreenNames.SetPassword>
) => {
  const onPress = () => {
    navigation.navigate(AppScreenNames.UserVerificationRequested);
  }
  return (
    <View>
      <Text>SetPassword</Text>
      <Button onPress={onPress}>
        {vocab.get().create}
      </Button>
    </View>
  );
};

export default SetPassword;
