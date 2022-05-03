import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { Transactions, TransactionDetails } from 'screens';
import { BackButton } from 'components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


const Stack = createNativeStackNavigator();

const TransactionsStack = (
  { route: { params } }: AppNavigationProps<AppScreenNames.TransactionsStack>
) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    params?.id && navigation.navigate(AppScreenNames.TransactionDetails, { id: params?.id });
  }, [params?.id]);

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
      <Stack.Screen
        name={AppScreenNames.TransactionDetails}
        component={TransactionDetails}
        options={({ navigation }: AppNavigationProps<AppScreenNames.TransactionDetails>) => ({
          presentation: 'modal',
          title: '',
          headerTransparent: true,
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default TransactionsStack;
