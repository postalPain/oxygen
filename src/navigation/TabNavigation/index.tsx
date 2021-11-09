import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppScreenNames } from 'navigation/types';
import {
  IconDashboard,
  IconProfile,
  IconTransactions,
  TabBar,
  TabWrapper,
  TabBarIconWrapper,
} from 'components';
import { Dashboard, Profile, Transactions } from 'screens';
import vocabulary from 'i18n';
import theme from 'config/theme';


const vocab = vocabulary.get();

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    tabBar={(props) => <TabBar {...props} />}
    initialRouteName={AppScreenNames.Dashboard}
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name={AppScreenNames.Dashboard}
      component={TabWrapper(Dashboard)}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabBarIconWrapper
            icon={<IconDashboard color={focused ? theme.colors.floos1 : '#CCCCCC'} />}
            title={vocab.dashboard}
            focused={focused}
          />
        ),
      }}
    />
    <Tab.Screen
      name={AppScreenNames.Transactions}
      component={TabWrapper(Transactions)}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabBarIconWrapper
            icon={<IconTransactions color={focused ? theme.colors.floos1 : '#CCCCCC'} />}
            title={vocab.dashboard}
            focused={focused}
          />
        ),
      }}
    />
    <Tab.Screen
      name={AppScreenNames.Profile}
      component={TabWrapper(Profile)}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabBarIconWrapper
            icon={<IconProfile color={focused ? theme.colors.floos1 : '#CCCCCC'} />}
            title={vocab.profile}
            focused={focused}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
