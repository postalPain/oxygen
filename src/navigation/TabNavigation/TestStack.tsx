import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard, Profile } from 'screens';
import TransactionsStack from './TransactionsStack';
import { AppScreenNames } from '../types';


const Tab = createBottomTabNavigator();

export default function TabNavigation () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={AppScreenNames.Dashboard}
        component={Dashboard}
      />
      <Tab.Screen
        name={AppScreenNames.TransactionsStack}
        component={TransactionsStack}
      />
      <Tab.Screen
        name={AppScreenNames.Profile}
        component={Profile}
      />
    </Tab.Navigator>
  );
}