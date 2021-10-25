import React from 'react';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DataPrivacy,
  EnterEmail,
  EnterRegistrationId,
  Onboarding,
  SetPassword,
  SignIn,
  UserVerificationPending,
  UserVerificationRequested,
} from 'screens';
import { AppScreenNames } from './types';
import { BackButton, IconBack, NavigationHeader, } from 'components';
import theme from 'config/theme';
import { headerStyles } from './styles';
import VerificationCode from 'screens/VerificationCode';
import ForgotPassword from 'screens/ForgotPassword';
import Dashboard from 'screens/Dashboard';


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
  header: (headerProps) => <NavigationHeader {...headerProps} />  // eslint-disable-line
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
          name={AppScreenNames.EnterRegistrationId}
          component={EnterRegistrationId}
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
          name={AppScreenNames.VerificationCode}
          component={VerificationCode}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.UserVerificationPending}
          component={UserVerificationPending}
          options={({ navigation }) => ({
            ...getHeaderOptions(),
            header: (headerProps) => (
              <NavigationHeader
                {...headerProps}
                headerLeft={<BackButton onPress={() => navigation.navigate(AppScreenNames.Onboarding)} />}
              />
            )
          })}
        />
        <AppStack.Screen
          name={AppScreenNames.ForgotPassword}
          component={ForgotPassword}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.Dashboard}
          component={Dashboard}
          options={getHeaderOptions()}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
