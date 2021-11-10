import React from 'react';
import { SafeAreaView, Text, } from 'react-native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';

interface ITransactionsProps {
  navigation: AppNavigationProps<AppScreenNames.Transactions>;
}

const Transactions: React.FC<ITransactionsProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Transactions Screen</Text>
    </SafeAreaView>
  );
};

export default Transactions;
