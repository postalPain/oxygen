import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Authentication,
  SignIn,
  UserVerificationPending,
} from 'screens';
import { AppScreenNames } from './types';
import SignUpStack from './SignUpStack';


const MainStack = createNativeStackNavigator();

const Navigation = () => {
  return (
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name={'Authentication'}
            component={Authentication}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <MainStack.Screen
            name={AppScreenNames.SignIn}
            component={SignIn}
          />
          <MainStack.Screen
            name={AppScreenNames.SignUp}
            component={SignUpStack}
            options={{ headerShown: false, gestureEnabled: false }}
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
