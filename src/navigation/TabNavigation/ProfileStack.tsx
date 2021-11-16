import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { AccountDetails, Profile, Settings, } from 'screens';
import { NavigationHeader } from 'components';
import vocab from 'i18n';
import { StyleSheet } from 'react-native';
import theme from '../../config/theme';


const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={AppScreenNames.Profile}>
      <Stack.Screen
        name={AppScreenNames.Profile}
        component={Profile}
        options={{
          headerShown: false,
        }}
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
                headerStyle={styles.header}
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
                headerStyle={styles.header}
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

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
    height: 80,
    paddingBottom: 28,
    // TODO fix shadow, remove border
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.shade1,
    shadowColor: theme.notifications.boxShadowColor,
    shadowOffset: theme.notifications.boxShadowOffset,
  }
});

export default ProfileStack;
