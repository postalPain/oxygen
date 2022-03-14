import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import {
  IconDashboard,
  IconProfile,
  IconTransactions,
} from 'components';
import TabBar from './TabBar';
import { Dashboard } from 'screens';
import vocabulary from 'i18n';
import theme from 'config/theme';
import TransactionsStack from './TransactionsStack';
import ProfileStack from './ProfileStack';
import { navigate } from 'navigation';
import useTabNavigationDeepLinks from 'navigation/deepLinks/useTabNavigationDeepLink';
import { usePushNotifications } from 'modules/pushNotifications/hooks/usePushNotifications';
import usePushTransactionDetails from 'modules/transactions/pushNotifications/usePushTransactionDetails';


const vocab = vocabulary.get();

const Tab = createBottomTabNavigator();


const TabNavigation: React.FC<AppNavigationProps<AppScreenNames.TabNavigation>> = () => {
  useTabNavigationDeepLinks(navigate);
  // const transactionPush = usePushTransactionDetails();

  // useEffect(() => {
  //   transactionPush && navigate(AppScreenNames.TransactionsStack, {
  //     screen: AppScreenNames.Transactions,
  //     params: {
  //       id: transactionPush.transaction_id
  //     }
  //   });
  // }, [transactionPush]);

  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName={AppScreenNames.Dashboard}
      screenOptions={{
        tabBarActiveTintColor: theme.colors.floos1,
        tabBarInactiveTintColor: '#ccc',
      }}
    >
      <Tab.Screen
        name={AppScreenNames.Dashboard}
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <IconDashboard color={color} />,
          tabBarLabel: vocab.dashboard,
        }}
      />
      <Tab.Screen
        name={AppScreenNames.TransactionsStack}
        component={TransactionsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <IconTransactions color={color} />,
          tabBarLabel: vocab.transactions,
        }}
      />
      <Tab.Screen
        name={AppScreenNames.ProfileStack}
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <IconProfile color={color} />,
          tabBarLabel: vocab.profile,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
