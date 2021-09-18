import React from 'react';
import { Text, View } from 'react-native';
import vocab from 'i18n';
import { AppScreenNames, SignUpNavigationProps, SignUpScreenNames } from 'navigation/types';
import { Button } from '@stryberventures/stryber-react-native-ui-components';


const EnterEmployer = (
  { navigation }: SignUpNavigationProps<SignUpScreenNames.EnterEmployer>
) => {
  const onPress = () => {
    navigation.navigate(AppScreenNames.EnterEmail);
  }
  return (
    <View>
      <Text>EnterEmployer</Text>
      <Button onPress={onPress}>
        {vocab.get().continue}
      </Button>
    </View>
  );
};

export default EnterEmployer;
