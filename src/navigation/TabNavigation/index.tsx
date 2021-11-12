import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import {
  IconDashboard,
  IconProfile,
  IconTransactions,
} from 'components';
import TabBar from './TabBar';
import { Dashboard, Profile } from 'screens';
import vocabulary from 'i18n';
import theme from 'config/theme';
import TransactionsStack from './TransactionsStack';


const vocab = vocabulary.get();

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC<AppNavigationProps<AppScreenNames.TabNavigation>> = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName={AppScreenNames.Dashboard}
      screenOptions={{
        tabBarActiveTintColor: theme.colors.floos1,
        tabBarInactiveTintColor: '#ccc',
        unmountOnBlur: true,
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
        name={AppScreenNames.Profile}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <IconProfile color={color} />,
          tabBarLabel: vocab.profile,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
