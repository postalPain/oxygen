import IconWallet from 'components/IconWallet';
import vocab from 'i18n';
import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { windowDimensions } from 'utils/window';
import { crcNumberFormat } from 'utils/currency';
import styles from './styles';
import { E2ETextWrapper } from '../E2EText';

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
            <E2ETextWrapper>
              <Text style={styles.amount}>{crcNumberFormat({ value: amount })}</Text>
            </E2ETextWrapper>
            <Text style={styles.currency}>{vocab.get().aed}</Text>
          </Text>
        </View>
        <Text style={styles.currency}>{vocab.get().availableToWithdraw.toLowerCase()}</Text>
      </View>
    </View>
  );
};

export default WithdrawalTagLarge;
