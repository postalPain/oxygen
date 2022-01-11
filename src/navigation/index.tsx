import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  UserInfoConfirmation, TransactionDetails, AccountDetails, Settings,
} from 'screens';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames } from './types';
import { IAuthData } from 'modules/auth/types';
import { getItems } from 'modules/asyncStorage';
import { clearAuthData, setAuthData } from 'modules/auth/actions';
import { checkVerification, userSetInfo } from 'modules/user/actions';
import { UserStoredKeys } from 'modules/user/types';
import TabNavigation from 'navigation/TabNavigation';
import { BackButton, NavigationHeader, } from 'components';
import theme from 'config/theme';
import WithdrawalSelect from 'screens/WithdrawalSelect';
import WithdrawalOverview from 'screens/WithdrawalOverview';
import WithdrawalConfirmation from 'screens/WithdrawalConfirmation';
import { isUserEmployerVerified } from 'modules/user/selectors';
import { IUserInfo } from 'services/api/employees';
import { AuthStoredKeys } from 'modules/auth/asyncStorage';
import DebugView from 'components/DebugView';
import { headerStyles, modalScreenStyles } from './styles';
import { UserDeepLinks } from 'modules/user/deepLinks';
import { getInitialDeepLink } from 'modules/dynamicLinks';

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
      (async () => {
        const deepLink = await getInitialDeepLink();
        console.log('deepLink', deepLink);


        // if (deepLink.topic === UserDeepLinks.invite_employee) {
        //   console.log('navigating');
        //   navigate(AppScreenNames.EnterRegistrationId, { registrationId: deepLink.registration_id });
        //   return;
        // }

        const storedData: IAuthData & Partial<IUserInfo> = await getItems([
          AuthStoredKeys.access_token,
          AuthStoredKeys.access_ttl,
          AuthStoredKeys.refresh_token,
          AuthStoredKeys.refresh_ttl,
          AuthStoredKeys.email,
          UserStoredKeys.first_name
        ]);
        dispatch(setAuthData(storedData));
        dispatch(userSetInfo({
          first_name: storedData.first_name,
          email: storedData.email,
        }));
        dispatch(checkVerification({
          onSuccess: (status) => {
            if (!isUserEmployerVerified(status)) {
              navigate(AppScreenNames.UserVerificationPending);
            } else {
              dispatch(clearAuthData());
              navigate(AppScreenNames.SignIn);
            }
          },
          onError: () => {
            storedData.email ? navigate(AppScreenNames.SignIn) : navigate(AppScreenNames.Onboarding);
          }
        }));
      })();
    },
    []
  );

  return (
    <NavigationContainer ref={navigationRef}>
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
          name={AppScreenNames.TabNavigation}
          component={TabNavigation}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name={AppScreenNames.WithdrawalSelect}
          component={WithdrawalSelect}
          options={({ navigation }: AppNavigationProps<AppScreenNames.WithdrawalSelect>) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
          })}
        />
        <AppStack.Screen
          name={AppScreenNames.WithdrawalOverview}
          component={WithdrawalOverview}
          options={({ navigation }: AppNavigationProps<AppScreenNames.WithdrawalOverview>) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
          })}
        />
        <AppStack.Screen
          name={AppScreenNames.WithdrawalConfirmation}
          component={WithdrawalConfirmation}
          options={{ headerShown: false }}
        />
        <AppStack.Group screenOptions={{ presentation: 'modal' }}>
          <AppStack.Screen
            name={AppScreenNames.TransactionsDetails}
            component={TransactionDetails}
            options={({ navigation }: AppNavigationProps<AppScreenNames.TransactionsDetails>) => ({
              title: '',
              headerTransparent: true,
              headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
            })}
          />
          <AppStack.Screen
            name={AppScreenNames.AccountDetails}
            component={AccountDetails}
            options={{
              headerShown: true,
              header: (headerProps) => (
                <NavigationHeader
                  {...headerProps}
                  headerStyle={modalScreenStyles.header}
                  title={vocab.get().accountDetails}
                  headerRight={null}
                />
              )
            }}
          />
          <AppStack.Screen
            name={AppScreenNames.Settings}
            component={Settings}
            options={{
              headerShown: true,
              header: (headerProps) => (
                <NavigationHeader
                  {...headerProps}
                  headerStyle={modalScreenStyles.header}
                  title={vocab.get().settings}
                  headerRight={null}
                />
              )
            }}
          />
        </AppStack.Group>
        <AppStack.Screen
          name={AppScreenNames.Debug}
          component={DebugView}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
