import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Onboarding,
  SignIn,
  UserVerificationPending,
} from 'screens';
import { AppScreenNames } from './types';
import SignUpStack from './SignUpStack';
import theme from 'config/theme';


const MainStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name={AppScreenNames.Onboarding}
          component={Onboarding}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <MainStack.Screen
          name={AppScreenNames.SignIn}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: theme.colors.screenBackgroundColorLight,
          }}
          component={SignIn}
        />
        <MainStack.Screen
          name={AppScreenNames.SignUp}
          component={SignUpStack}
          options={{ headerShown: true, gestureEnabled: false }}
        />
        <MainStack.Screen
          name={AppScreenNames.UserVerificationPending}
          component={UserVerificationPending}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
