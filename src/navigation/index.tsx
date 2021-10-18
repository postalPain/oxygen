import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DataPrivacy,
  EnterEmail,
  EnterEmployer,
  Onboarding, SetPassword,
  SignIn,
  UserVerificationPending, UserVerificationRequested,
} from 'screens';
import { AppScreenNames } from './types';
import { Header } from 'components';
import { headerStyles } from './styles';


const AppStack = createNativeStackNavigator();

const getHeaderOptions = () => ({
  ...headerStyles,
  headerShown: true,
  gestureEnabled: false,
  title: '',
  headerTitle: '',
  headerBackTitleVisible: false,
  headerBackVisible: false,
  headerTransparent: true,
  header: (headerProps) => <Header {...headerProps} />
});



const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={getHeaderOptions()}
      >
        <AppStack.Screen
          name={AppScreenNames.Onboarding}
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name={AppScreenNames.SignIn}
          component={SignIn}
        />
        <AppStack.Screen
          name={AppScreenNames.EnterEmployer}
          component={EnterEmployer}
        />
        <AppStack.Screen
          name={AppScreenNames.EnterEmail}
          component={EnterEmail}
        />
        <AppStack.Screen
          name={AppScreenNames.SetPassword}
          component={SetPassword}
        />
        <AppStack.Screen
          name={AppScreenNames.DataPrivacy}
          component={DataPrivacy}
        />
        <AppStack.Screen
          name={AppScreenNames.UserVerificationRequested}
          component={UserVerificationRequested}
        />
        <AppStack.Screen
          name={AppScreenNames.UserVerificationPending}
          component={UserVerificationPending}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
