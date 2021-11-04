import vocab from 'i18n';
import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import styles from './styles';

interface IWithdrawalTagSmall {
  amount: number;
  withdrawn?: boolean;
  earned?: boolean;
  style?: ViewStyle;
}

const WithdrawalTagSmall = ({ amount, withdrawn, earned, style }: IWithdrawalTagSmall) => {
  return (
    <View style={[styles.withdrawalTagSmall, style]}>
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