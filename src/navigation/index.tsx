import React from 'react';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DataPrivacy,
  EnterEmail,
  EnterEmployer,
  Onboarding,
  SetPassword,
  SignIn,
  UserVerificationPending,
  UserVerificationRequested,
} from 'screens';
import { AppScreenNames } from './types';
import { IconBack, NavigationHeader } from 'components';
import theme from 'config/theme';
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
  header: (headerProps) => <NavigationHeader {...headerProps} />
});



const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name={AppScreenNames.Onboarding}
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name={AppScreenNames.SignIn}
          options={({ navigation }) => ({
            headerShown: true,
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <IconBack color={theme.colors.screenBackgroundColorLight} />
              </Pressable>
            )
          })}
          component={SignIn}
        />
        <AppStack.Screen
          name={AppScreenNames.EnterEmployer}
          component={EnterEmployer}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.EnterEmail}
          component={EnterEmail}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.SetPassword}
          component={SetPassword}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.DataPrivacy}
          component={DataPrivacy}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.UserVerificationRequested}
          component={UserVerificationRequested}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <AppStack.Screen
          name={AppScreenNames.UserVerificationPending}
          component={UserVerificationPending}
          options={getHeaderOptions()}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
