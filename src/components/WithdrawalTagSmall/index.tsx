import vocab from 'i18n';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface IWithdrawalTagSmall {
  amount: number;
  withdrawn?: boolean;
  earned?: boolean;
}

const WithdrawalTagSmall = ({ amount, withdrawn, earned }: IWithdrawalTagSmall) => {
  return (
    <View style={styles.withdrawalTagSmall}>
      <View style={styles.textContainer}>
        <Text style={styles.textContainer}>
          <Text style={styles.amount}>{amount}</Text>
          <Text>{vocab.get().aed}</Text>
        </Text>
        <Text style={styles.textContainer}>
          {withdrawn && vocab.get().withdrawn}
          {earned && vocab.get().earnedUntilToday}
        </Text>
      </View>
    </View>
  );
};

export default WithdrawalTagSmall;