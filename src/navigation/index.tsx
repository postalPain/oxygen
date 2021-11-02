import React, { useEffect } from 'react';
import moment from 'moment';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DataPrivacy,
  EnterEmail,
  EnterRegistrationId,
  Onboarding,
  SetPassword,
  SignInRegular,
  UserVerificationPending,
} from 'screens';
import { useDispatch, useSelector } from 'react-redux';
import { getMultipleItems } from 'modules/asyncStorage';
import { checkVerification } from 'modules/user/actions';
import { setAuthData } from 'modules/auth/actions';
import { selectAuthData } from 'modules/auth/selectors';
import { VerificationStatuses } from 'modules/user/types';
import { selectVerificationStatus } from 'modules/user/selectors';
import { AppScreenNames } from './types';
import { BackButton, IconBack, NavigationHeader, } from 'components';
import ForgotPassword from 'screens/ForgotPassword';
import Dashboard from 'screens/Dashboard';
import SetPasswordSignUp from 'screens/SetPasswordSignUp';
import VerificationCodeSignUp from 'screens/VerificationCodeSignUp';
import ForgotPasswordCode from 'screens/ForgotPasswordCode';
import SetPasswordForgot from 'screens/SetPasswordForgot';
import ForgotPasswordRequested from 'screens/ForgotPasswordRequested';
import ForgotPasswordSignIn from 'screens/ForgotPasswordSignIn';
import theme from 'config/theme';
import { headerStyles } from './styles';


const isTokenValid = (ttl: string) => {
  const offset = moment().utcOffset();
  const ttl_ts = Number(moment.parseZone(ttl).add(offset, 'm').format('x'));
  const now_ts = Number(Date.now());
  return (ttl_ts + 5000) > now_ts;
};

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
  const { access_token, access_ttl } = useSelector(selectAuthData);
  const userStatus = useSelector(selectVerificationStatus);
  const isSignedIn = !!access_token && isTokenValid(access_ttl);
  useEffect(() => {
    getMultipleItems(['access_token', 'access_ttl', 'refresh_token', 'refresh_ttl']).then((value) => {
      const _authData = value.reduce((acc, v) => ({ ...acc, [v[0]]: v[1], }), {});
      dispatch(setAuthData(_authData));
    });
  }, []);
  useEffect(
    () => {
      if (!!access_token) dispatch(checkVerification());
    },
    [access_token]
  );
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {(!isSignedIn || !userStatus) && (
          <>
            <AppStack.Screen
              name={AppScreenNames.Onboarding}
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <AppStack.Screen
              name={AppScreenNames.SignIn}
              component={SignInRegular}
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
              name={AppScreenNames.UserVerificationRequestedForgot}
              component={ForgotPasswordRequested}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
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
          </>
        )}
        {((!!access_token && !userStatus) || (userStatus === VerificationStatuses.new)
          || (userStatus === VerificationStatuses.email_verified)
          || (userStatus === VerificationStatuses.employer_verified)
          || (userStatus === VerificationStatuses.employer_not_verified)) && (
          <>
            <AppStack.Screen
              name={AppScreenNames.UserVerificationPending}
              component={UserVerificationPending}
              options={({ navigation }) => ({
                ...getHeaderOptions(),
                header: (headerProps) => (
                  <NavigationHeader
                    {...headerProps}  // eslint-disable-line
                    headerLeft={null}
                  />
                )
              })}
            />
            <AppStack.Screen
              name={AppScreenNames.VerificationCodeSignUp}
              component={VerificationCodeSignUp}
              options={getHeaderOptions()}
            />
          </>
        )}
        {isSignedIn && (
          <>
            <AppStack.Screen
              name={AppScreenNames.Dashboard}
              component={Dashboard}
              options={getHeaderOptions()}
            />
          </>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
