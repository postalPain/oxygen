import React from 'react';
import { Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { AccountDetails, Profile, Settings, } from 'screens';
import { IconBack } from 'components';
import theme from 'config/theme';


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
      <Stack.Screen
        name={AppScreenNames.AccountDetails}
        component={AccountDetails}
        options={({ navigation }: AppNavigationProps<AppScreenNames.AccountDetails>) => ({
          headerShown: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <IconBack color={theme.colors.floos1} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name={AppScreenNames.Settings}
        component={Settings}
        options={({ navigation }: AppNavigationProps<AppScreenNames.Settings>) => ({
          headerShown: true,
          headerTransparent: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <IconBack color={theme.colors.floos1} />
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
