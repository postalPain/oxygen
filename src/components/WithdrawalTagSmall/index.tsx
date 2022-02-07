import vocab from 'i18n';
import React, { useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import styles from './styles';

interface IWithdrawalTagSmall {
  amount: number;
  withdrawn?: boolean;
  earned?: boolean;
  style?: ViewStyle;
}

const WithdrawalTagSmall = ({ amount, withdrawn, earned, style }: IWithdrawalTagSmall) => {
  const [width, setWidth] = useState<number>();

  return (
    <View
      style={[styles.withdrawalTagSmall, style]}
      onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width);
      }}
    >
      <View>
        <Text style={styles.textContainer}>
          <Text style={[
            styles.amount,
            amount?.toString().length > 4 && width && { fontSize: (width ** 1.48) / (12 * amount.toString().length) }
          ]}
          >{amount}
          </Text>
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