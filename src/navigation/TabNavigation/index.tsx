import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppScreenNames } from 'navigation/types';
import {
  IconDashboard,
  IconProfile,
  IconTransactions,
} from 'components';
import TabBar from './TabBar';
import TabWrapper from './TabWrapper';
import { Dashboard, Profile, Transactions } from 'screens';
import vocabulary from 'i18n';
import theme from 'config/theme';


const vocab = vocabulary.get();

const Tab = createBottomTabNavigator();

const getTabColor = (focused: boolean) => focused
  ? theme.colors.floos1
  : '#CCCCCC';

const TabNavigation = () => (
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
      component={TabWrapper(Dashboard)}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <IconDashboard color={color} />,
        tabBarLabel: vocab.dashboard,
      }}
    />
    <Tab.Screen
      name={AppScreenNames.Transactions}
      component={TabWrapper(Transactions)}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <IconTransactions color={color} />,
        tabBarLabel: vocab.transactions,
      }}
    />
    <Tab.Screen
      name={AppScreenNames.Profile}
      component={TabWrapper(Profile)}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <IconProfile color={color} />,
        tabBarLabel: vocab.profile,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
