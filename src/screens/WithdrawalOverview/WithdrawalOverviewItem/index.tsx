import IconCardAdd from 'components/IconCardAdd';
import IconCardSend from 'components/IconCardSend';
import IconCardTick from 'components/IconCardTick';
import theme from 'config/theme';
import vocab from 'i18n';
import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { windowDimensions } from 'utils/window';

type TOverviewType = 'requested' | 'charge' | 'deduction';

interface IWithdrawalOverviewItem {
  type: TOverviewType;
  amount: number;
  style?: ViewStyle;
}

const WithdrawalOverviewItem = ({ type, amount, style }: IWithdrawalOverviewItem) => {
  return (
    <View style={[styles.withdrawalOverviewItem, style]}>
      <View style={styles.iconContainer}>
        {type === 'requested' && <IconCardTick />}
        {type === 'charge' && <IconCardAdd />}
        {type === 'deduction' && <IconCardSend />}
      </View>
      <View>
        <Text style={styles.text}>
          {type === 'requested' && vocab.get().requestedWithdrawal}
          {type === 'charge' && vocab.get().serviceCharge}
          {type === 'deduction' && vocab.get().totalSalaryDeduction}
        </Text>
        <Text style={[styles.text, styles.amountText]}>{amount} {vocab.get().aed}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  withdrawalOverviewItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    paddingRight: 0.05 * windowDimensions.width
  },
  text: {
    fontSize: theme.sizes.fontSizeHeaderSmall,
  },
  amountText: {
    fontWeight: '600',
    paddingTop: 0.005 * windowDimensions.height,
  }
});

export default WithdrawalOverviewItem;