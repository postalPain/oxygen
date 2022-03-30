import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { AccountDetails, Settings, } from 'screens';
import TabNavigation from 'navigation/TabNavigation';
import WithdrawalSelect from 'screens/WithdrawalSelect';
import { BackButton, NavigationHeader } from 'components';
import WithdrawalOverview from 'screens/WithdrawalOverview';
import WithdrawalConfirmation from 'screens/WithdrawalConfirmation';
import { modalScreenStyles } from 'navigation/styles';
import vocab from 'i18n';
import { navigate } from 'navigation';
import useTabNavigationDeepLinks from 'navigation/deepLinks/useTabNavigationDeepLink';


const Stack = createNativeStackNavigator();

const AuthorizedStack = () => {

  const deepLinkScreenName = useTabNavigationDeepLinks();

  useEffect(() => {
    deepLinkScreenName && navigate(deepLinkScreenName);
  }, [deepLinkScreenName]);

  return (
    <Stack.Navigator initialRouteName={AppScreenNames.TabNavigation}>
      <Stack.Screen
        name={AppScreenNames.TabNavigation}
        component={TabNavigation}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AppScreenNames.WithdrawalSelect}
        component={WithdrawalSelect}
        options={({ navigation }: AppNavigationProps<AppScreenNames.WithdrawalSelect>) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name={AppScreenNames.WithdrawalOverview}
        component={WithdrawalOverview}
        options={({ navigation }: AppNavigationProps<AppScreenNames.WithdrawalOverview>) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name={AppScreenNames.WithdrawalConfirmation}
        component={WithdrawalConfirmation}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
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
        <Stack.Screen
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
