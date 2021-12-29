import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreenNames } from 'navigation/types';
import { Profile, } from 'screens';


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
    </Stack.Navigator>
  );
};

export default ProfileStack;
