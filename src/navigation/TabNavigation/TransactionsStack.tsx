import React from 'react';
import { Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreenNames } from 'navigation/types';
import { Transactions, TransactionDetails } from 'screens';
import { IconBack } from 'components';


const Stack = createNativeStackNavigator();

const TransactionsStack = () => {
  return (
    <Stack.Navigator initialRouteName={AppScreenNames.Transactions}>
      <Stack.Screen
        name={AppScreenNames.Transactions}
        component={Transactions}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AppScreenNames.TransactionsDetails}
        component={TransactionDetails}
        options={({ navigation }) => ({
          title: '',
          headerLeft: () => (
            <Pressable onPress={() => { navigation.goBack(); }} >
              <IconBack />
            </Pressable>
          )
        })}
      />
    </Stack.Navigator>
  );
};

export default TransactionsStack;
