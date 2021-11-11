import React from 'react';
import { Text, View, } from 'react-native';

interface INoTransactionsProps {
}

const NoTransactions: React.FC<INoTransactionsProps> = () => {
  return (
    <View>
      <Text>No Transactions</Text>
    </View>
  );
};

export default NoTransactions;
