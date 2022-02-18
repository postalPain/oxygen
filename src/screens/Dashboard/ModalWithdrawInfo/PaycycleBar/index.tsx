import React, { useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import vocab from 'i18n';
import moment from 'moment';
import { paycycleBarHeight, styles } from './styles';

interface IWithdrawInfoBar {
  startDate: string; // yyyy-mm-dd
  endDate: string; // yyyy-mm-dd
  daysTotal: number;
  daysLeft: number;
  styles?: ViewStyle;
}

const PaycycleBar = (props: IWithdrawInfoBar) => {
  const [barWidth, setBarWidth] = useState<number>(null);

  const getActiveBarWidth = () => {
    const maximumVisiblePercentage = (barWidth - paycycleBarHeight) / barWidth;
    const minimumVisiblePercantage = paycycleBarHeight / barWidth;

    const actualPercentage = (props.daysTotal - props.daysLeft) / props.daysTotal;

    let width: any = `${actualPercentage * 100}%`;

    if (props.daysLeft === 0) {
      width = barWidth;
    } else if (actualPercentage < minimumVisiblePercantage) {
      width = paycycleBarHeight;
    } else if (actualPercentage > maximumVisiblePercentage) {
      width = barWidth - paycycleBarHeight;
    }

    return width;
  };

  return (
    <View
      onLayout={(event) => setBarWidth(event.nativeEvent.layout.width)}
      style={[
        styles.withdrawInfoBar,
        styles.bar,
        props.styles
      ]}
    >
      <View style={[ styles.bar, styles.activeBar, { width: getActiveBarWidth() }]} >
        <View style={styles.dateContainer}>
          <Text style={[styles.month, styles.startDate]}>
            {moment().format('MMM')}
          </Text>
          <Text style={[styles.startDate, styles.day]}>
            {moment().format('D')}
          </Text>
          <View style={styles.today}>
            <Text style={styles.today}>
              {vocab.get().today}
            </Text>
          </View>
        </View>
      </View>
      { props.daysLeft !== 0 && (
        <View style={styles.dateContainer}>
          <Text style={styles.month}>
            {moment(props.endDate).format('MMM')}
          </Text>
          <Text style={[styles.month, styles.day]}>
            {moment(props.endDate).format('D')}
          </Text>
        </View>
      )}
    </View>
  );
};


export default PaycycleBar;