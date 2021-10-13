import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import vocabulary from 'i18n';
import { SignUpScreenNames, SignUpStackParameters } from 'navigation/types';
import {
  EnterEmployer,
  EnterEmail,
  SetPassword,
  UserVerificationRequested,
  DataPrivacy,
} from 'screens';
import { openBrowser } from 'utils';
import { navStyles, commonHeaderOptions } from './styles';


const headerRight = () => (
  <Text style={navStyles.headerText} onPress={() => openBrowser('/help')}>
    {vocabulary.get().help}
  </Text>
);

const headerOptions = {
  ...commonHeaderOptions,
  title: '',
  headerBackTitle: vocabulary.get().back,
  headerBackTitleVisible: true,
  // headerRight,
};
const SignUpStack = createStackNavigator<SignUpStackParameters>();

const SignUp = () => {
  return (
    <SignUpStack.Navigator
      initialRouteName={SignUpScreenNames.EnterEmployer}
      screenOptions={headerOptions}
    >
      <SignUpStack.Screen
        name={SignUpScreenNames.EnterEmployer}
        component={EnterEmployer}
      />
      <SignUpStack.Screen
        name={SignUpScreenNames.EnterEmail}
        component={EnterEmail}
      />
      <SignUpStack.Screen
        name={SignUpScreenNames.SetPassword}
        component={SetPassword}
      />
      <SignUpStack.Screen
        name={SignUpScreenNames.DataPrivacy}
        component={DataPrivacy}
      />
      <SignUpStack.Screen
        name={SignUpScreenNames.UserVerificationRequested}
        component={UserVerificationRequested}
      />
    </SignUpStack.Navigator>
  );
};

export default SignUp;
