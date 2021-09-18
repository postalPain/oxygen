import React from 'react';
import { Text, View } from 'react-native';
import vocab from 'i18n';
import { AppScreenNames, SignUpNavigationProps, SignUpScreenNames } from 'navigation/types';
import { Button } from '@stryberventures/stryber-react-native-ui-components';


const EnterEmail = (
  { navigation }: SignUpNavigationProps<SignUpScreenNames.EnterEmail>
) => {
  const onPress = () => {
    navigation.navigate(AppScreenNames.SetPassword);
  }
  return (
    <View>
      <Text>EnterEmail</Text>
      <Button onPress={onPress}>
        {vocab.get().continue}
      </Button>
    </View>
  );
};

export default EnterEmail;
