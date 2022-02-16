import IconWallet from 'components/IconWallet';
import vocab from 'i18n';
import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { windowDimensions } from 'utils/window';
import styles from './styles';

interface IWithdrawalTagLarge {
  amount?: number;
  style?: ViewStyle;
}

const WithdrawalTagLarge = ({ amount, style }: IWithdrawalTagLarge) => {
  return (
    <View style={[styles.withdrawalTagLarge, style]}>
      <View>
        <View style={styles.amountContainer}>
          <View style={styles.walletContainer}>
            <IconWallet size={0.12 * windowDimensions.width} />
          </View>
          <Text>
            <Text style={styles.amount}>{amount}</Text>
            <Text style={styles.currency}>{vocab.get().aed}</Text>
          </Text>
        </View>
        <Text style={styles.currency}>{vocab.get().availableToWithdraw.toLowerCase()}</Text>
      </View>
    </View>
  );
};

export default WithdrawalTagLarge;