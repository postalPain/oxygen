import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import TabBar from './TabBar';
import { Dashboard } from 'screens';
import vocabulary from 'i18n';
import theme from 'config/theme';
import TransactionsStack from './TransactionsStack';
import ProfileStack from './ProfileStack';
import IconDashboardRamadan from 'components/CampaignRamadan/IconDashboardRamadan';
import { isRamadan22 } from 'utils/time';
import IconDashboard from 'components/IconDashboard';
import IconTransactions from 'components/IconTransactions';
import IconProfile from 'components/IconProfile';


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
      }}
    >
      <Tab.Screen
        name={AppScreenNames.Dashboard}
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => isRamadan22() ? <IconDashboardRamadan color={color} /> : <IconDashboard color={color} />,
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
