import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { IAuthData } from 'modules/auth/types';
import { getItems } from 'modules/asyncStorage';
import { clearAuthData, setAuthData } from 'modules/auth/actions';
import { checkVerification, userSetInfo } from 'modules/user/actions';
import { UserStoredKeys } from 'modules/user/types';
import { BackButton, NavigationHeader, } from 'components';
import theme from 'config/theme';
import { isUserEmployerVerified, selectEmailVerified, selectUserEmail } from 'modules/user/selectors';
import { IUserInfo } from 'services/api/employees/types';
import { AuthStoredKeys } from 'modules/auth/asyncStorage';
import DebugView from 'components/DebugView';
import { headerStyles } from './styles';
import SplashScreen from 'react-native-splash-screen';
import useSignUpCodeDeepLink from '../modules/auth/deepLinks/useSignUpCodeDeepLink';
import { analytics } from '../services/analytics';
import AuthorizedStack from './AuthorizedStack';
import Update from 'screens/Update';
import { DbKeys, useDatabase } from 'modules/fbDatabase/useDatabase';
import env from 'env';
import { isTtlActive } from 'utils/time';

const AppStack = createNativeStackNavigator();

export let navigate;

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
  const routeNameRef = React.useRef();

  const emailVerified = useSelector(selectEmailVerified);

  const [codeDeepLink] = useSignUpCodeDeepLink();
  const {
    dbValue: minimumSupportedBuild,
  } = useDatabase<Number>(DbKeys.minSupportedBuild);

  navigate = (name: AppScreenNames, params?: any) => {
    if (navigationRef && navigationRef.current) {
      navigationRef?.current?.navigate(name, params);
    }
  };

  useEffect(() => {
    codeDeepLink && !emailVerified && navigate(AppScreenNames.UserVerificationPending);
  }, [codeDeepLink]);

  useEffect(() => {
    if (minimumSupportedBuild && Number(env.buildVersion) < minimumSupportedBuild) {
      navigate(AppScreenNames.Update);
    }
  }, [minimumSupportedBuild]);

  const doNavigation = async (email, status?) => {
    setTimeout(() => SplashScreen.hide(), 400);

    if (status) {
      if (!isUserEmployerVerified(status)) {
        navigate(AppScreenNames.UserVerificationPending);
      } else {
        dispatch(clearAuthData());
        navigate(AppScreenNames.SignIn);
      }
    } else {
      email ? navigate(AppScreenNames.SignIn) : navigate(AppScreenNames.Onboarding);
    }
  };

  useEffect(
    () => {
      (async () => {
        const storedAuthData: IAuthData = await getItems([
          AuthStoredKeys.access_token,
          AuthStoredKeys.access_ttl,
          AuthStoredKeys.refresh_token,
          AuthStoredKeys.refresh_ttl
        ]);
        const storedUserData: Partial<IUserInfo> = await getItems([
          AuthStoredKeys.email,
          UserStoredKeys.first_name
        ]);
        dispatch(setAuthData(storedAuthData));
        dispatch(userSetInfo(storedUserData));

        if (storedAuthData.access_token && isTtlActive(storedAuthData.access_ttl)) {
          dispatch(checkVerification({
            onSuccess: (status) => doNavigation(storedUserData.email, status),
            onError: () => doNavigation(storedUserData.email)
          }));
        } else {
          doNavigation(storedUserData.email);
        }
      })();
    },
    []
  );

  const onNavigationReady = () => {
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

  const onNavigationStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
      await analytics.logScreen(currentRouteName);
    }
    routeNameRef.current = currentRouteName;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onNavigationReady}
      onStateChange={onNavigationStateChange}
    >
      <AppStack.Navigator screenOptions={{
        headerShadowVisible: false
      }}
      >
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
              <BackButton
                onPress={() => navigation.goBack()}
                color={theme.colors.screenBackgroundColorLight}
              />
            )
          })}
        />
        <AppStack.Screen
          name={AppScreenNames.VerificationCodeForgot}
          component={ForgotPasswordCode}
          options={({
            title: '',
            headerTransparent: true,
            header: (headerProps) => (
              <NavigationHeader
                {...headerProps} // eslint-disable-line
                headerLeft={null}
              />
            )
          })}
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
          name={AppScreenNames.AuthorizedStack}
          component={AuthorizedStack}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name={AppScreenNames.Debug}
          component={DebugView}
        />
        <AppStack.Screen
          name={AppScreenNames.Update}
          component={Update}
          options={{
            headerShown: false,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
