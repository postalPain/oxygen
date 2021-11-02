import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const WithdrawalTagSmall = () => {
  return (
    <View style={styles.withdrawalTagSmall}>
      <View style={styles.textContainer}>
        <Text style={styles.textContainer}>
          <Text style={styles.amount}>2500</Text>
          <Text></Text>
        </Text>
      </View>
    </View>
  );
};

export default WithdrawalTagSmall;