import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreenNames } from 'navigation/types';
import { Transactions, TransactionDetails } from 'screens';
import { BackButton } from 'components';


const Stack = createNativeStackNavigator();

const TransactionsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppScreenNames.Transactions}
      screenOptions={{
        headerShadowVisible: false
      }}
    >
      <Stack.Screen
        name={AppScreenNames.Transactions}
        component={Transactions}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name={AppScreenNames.TransactionsDetails}
          component={TransactionDetails}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => <BackButton onPress={() => { navigation.goBack(); }} />
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default TransactionsStack;
