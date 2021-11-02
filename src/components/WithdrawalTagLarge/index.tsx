import IconPlus from 'components/IconPlus';
import IconWallet from 'components/IconWallet';
import vocab from 'i18n';
import React from 'react';
import { Text, View } from 'react-native';
import { windowDimensions } from 'utils/window';
import styles from './styles';

const WithdrawalTagLarge = () => {
  return (
    <View style={styles.withdrawalTagLarge}>
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