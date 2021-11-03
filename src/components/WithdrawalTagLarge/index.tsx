import IconWallet from 'components/IconWallet';
import vocab from 'i18n';
import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { windowDimensions } from 'utils/window';
import styles from './styles';

interface IWithdrawalTagLarge {
  style?: ViewStyle;
}

const WithdrawalTagLarge = ({ style }: IWithdrawalTagLarge) => {
  return (
    <View style={[styles.withdrawalTagLarge, style]}>
      <View>
        <View style={styles.amountContainer}>
          <View style={styles.walletContainer}>
            <IconWallet size={0.1 * windowDimensions.width} />
          </View>
          <Text>
            <Text style={styles.amount}>1500</Text>
            <Text style={styles.currency}>AED</Text>
          </Text>
        </View>
        <Text style={styles.currency}>{vocab.get().availableToWithdraw}</Text>
      </View>
    </View>
  );
};

export default WithdrawalTagLarge;