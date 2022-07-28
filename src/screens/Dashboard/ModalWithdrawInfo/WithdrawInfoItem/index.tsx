import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { getWidth } from 'utils/window';
import { crcNumberFormat } from 'utils/currency';
import vocab from 'i18n';
import IconCheckSquare from 'components/IconCheckSquare';
import styles from './styles';

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
            {crcNumberFormat({ value: props.amount })}
          </Text>
          <Text style={styles.currency}>
            {vocab.get().aed}
          </Text>
        </Text>
      </View>
    </View>
  );
};


export default WithdrawInfoItem;