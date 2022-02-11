import vocab from 'i18n';
import React, { useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { getWidth } from 'utils/window';
import styles from './styles';

interface IWithdrawalTagSmall {
  amount: number;
  withdrawn?: boolean;
  earned?: boolean;
  style?: ViewStyle;
}

const WithdrawalTagSmall = ({ amount, withdrawn, earned, style }: IWithdrawalTagSmall) => {
  return (
    <View style={[styles.withdrawalTagSmall, style]} >
      <View>
        <Text style={styles.textContainer}>
          <Text style={[
            styles.amount,
            amount?.toString().length > 4 && { fontSize: getWidth(35) / amount.toString().length }
          ]}
          >{amount}
          </Text>
          <Text>{vocab.get().aed}</Text>
        </Text>
        {withdrawn && <Text style={styles.textContainer}>{vocab.get().withdrawn}</Text>}
        {earned && <Text style={styles.textContainer}>{vocab.get().earnedUntilToday}</Text>}
      </View>
    </View>
  );
};

export default WithdrawalTagSmall;