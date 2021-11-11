import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DataPrivacy,
  EnterEmail,
  EnterRegistrationId,
  Onboarding,
  SignInRegular,
  SetPasswordSignUp,
  SetPasswordForgot,
  UserVerificationPending,
  VerificationCodeSignUp,
  ForgotPasswordCode,
  ForgotPasswordRequested,
  ForgotPasswordSignIn,
  ForgotPassword,
  UserInfoConfirmation,
} from 'screens';
import { AppNavigationProps, AppScreenNames } from './types';
import { AuthStoredKeys } from 'modules/auth/types';
import { getMultipleItems } from 'modules/asyncStorage';
import { setAuthData } from 'modules/auth/actions';
import { checkVerification, userSetInfo } from 'modules/user/actions';
import { isPending } from 'modules/user/selectors';
import { UserStoredKeys } from 'modules/user/types';
import TabNavigation from 'navigation/TabNavigation';
import { IconBack, NavigationHeader, } from 'components';
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
  header: (headerProps) => <NavigationHeader {...headerProps} />  // eslint-disable-line
});

const Navigation = () => {
  const dispatch = useDispatch();
  const navigationRef = React.useRef(null);
  const navigate = (name: any, params?: any) => {
    if (navigationRef && navigationRef.current) {
      navigationRef?.current?.navigate(name, params);
    }
  };

  useEffect(
    () => {
      getMultipleItems([
        AuthStoredKeys.access_token,
        AuthStoredKeys.access_ttl,
        AuthStoredKeys.refresh_token,
        AuthStoredKeys.refresh_ttl,
        AuthStoredKeys.email,
        UserStoredKeys.first_name
      ]).then((_authData) => {
        dispatch(setAuthData(_authData));
        dispatch(userSetInfo({
          first_name: _authData.first_name,
          email: _authData.email,
        }));
        dispatch(checkVerification({
          onSuccess: (status) => {
            if (isPending(status)) {
              navigate(AppScreenNames.UserVerificationPending);
            } else {
              navigate(AppScreenNames.SignIn);
            }
          },
          onError: () => {
            navigate(AppScreenNames.Onboarding);
          }
        }));
      });
    },
    []
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator>
        <AppStack.Screen
          name={AppScreenNames.Onboarding}
          component={Onboarding}
          options={{ headerShown: false }}
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
          name={AppScreenNames.SetPasswordSignUp}
          component={SetPasswordSignUp}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.DataPrivacy}
          component={DataPrivacy}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.ForgotPassword}
          component={ForgotPassword}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.ForgotPasswordRequested}
          component={ForgotPasswordRequested}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <AppStack.Screen
          name={AppScreenNames.SignIn}
          component={SignInRegular}
          options={({ navigation, route: { params } }: AppNavigationProps<AppScreenNames.SignIn>) => ({
            headerShown: !params?.noBackButton,
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <IconBack color={theme.colors.screenBackgroundColorLight} />
              </Pressable>
            )
          })}
        />
        <AppStack.Screen
          name={AppScreenNames.VerificationCodeForgot}
          component={ForgotPasswordCode}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.SetPasswordForgot}
          component={SetPasswordForgot}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.SignInForgot}
          component={ForgotPasswordSignIn}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name={AppScreenNames.UserVerificationPending}
          component={UserVerificationPending}
          options={{
            ...getHeaderOptions(),
            header: (headerProps) => (
              <NavigationHeader
                {...headerProps}  // eslint-disable-line
                headerLeft={null}
              />
            )
          }}
        />
        <AppStack.Screen
          name={AppScreenNames.VerificationCodeSignUp}
          component={VerificationCodeSignUp}
          options={getHeaderOptions()}
        />
        <AppStack.Screen
          name={AppScreenNames.UserInfoConfirmation}
          component={UserInfoConfirmation}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name={AppScreenNames.TabNavigation}
          component={TabNavigation}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
