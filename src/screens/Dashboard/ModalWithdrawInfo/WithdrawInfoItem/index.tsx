import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';
import vocab from 'i18n';
import { IconCheck, IconInfo } from 'components';
import IconCheckRound from 'components/IconCheckRound';
import IconCheckSquare from 'components/IconCheckSquare';

interface IWithdrawInfoItem {
  header: string;
  text: string;
  amount: number;
  styles?: ViewStyle;
}

const WithdrawInfoItem = (props: IWithdrawInfoItem) => {
  return (
    <View style={[styles.withdrawItemInfo, props.styles]}>
      <View style={styles.checkContainer}>
        <IconCheckSquare size={getWidth(4)} />
      </View>
      <View style={styles.description}>
        <Text style={styles.header}>
          {props.header}
        </Text>
        <Text style={styles.text}>
          {props.text}
        </Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>
          <Text style={styles.number}>
            {props.amount}
          </Text>
          <Text style={styles.currency}>
            {vocab.get().aed}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  withdrawItemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkContainer: {
    alignSelf: 'flex-start',
    paddingRight: getWidth(3),
    paddingTop: getWidth(.7)
  },
  description: {
    flexShrink: 1,
  },
  header: {
    fontWeight: '600',
    fontSize: getWidth(4),
    paddingBottom: getHeight(.5)
  },
  text: {
    fontSize: getWidth(4)
  },
  amountContainer: {
    minWidth: getWidth(25),
    flexShrink: 0,
    alignItems: 'flex-end'
  },
  amount: {
    color: theme.colors.floos1,
    opacity: .7,
  },
  number: {
    fontSize: getWidth(6),
    fontWeight: '600',
  },
  currency: {
    fontSize: getWidth(3)
  }

});

export default WithdrawInfoItem;