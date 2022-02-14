import theme from 'config/theme';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { getHeight, getWidth } from 'utils/window';
import env from 'env';
import vocab from 'i18n';

interface IWithdrawInfoBar {
  startDate: string; // yyyy-mm-dd
  endDate: string; // yyyy-mm-dd
  daysTotal: number;
  daysLeft: number;
  styles?: ViewStyle;
}

const WithdrawInfoBar = (props: IWithdrawInfoBar) => {
  const [barWidth, setBarWidth] = useState<number>(null);

  const getActiveBarWidth = () => {
    const maximumVisiblePercentage = (barWidth - barHeight) / barWidth;
    const minimumVisiblePercantage = barHeight / barWidth;

    const actualPercentage = (props.daysTotal - props.daysLeft) / props.daysTotal;

    let width: any = `${actualPercentage * 100}%`;

    if (props.daysLeft === 0) {
      width = barWidth;
    } else if (actualPercentage < minimumVisiblePercantage) {
      width = barHeight;
    } else if (actualPercentage > maximumVisiblePercentage) {
      width = barWidth - barHeight;
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
            {getMonth(props.startDate)}
          </Text>
          <Text style={[styles.startDate, styles.day]}>
            {getDay(props.startDate)}
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
            {getMonth(props.endDate)}
          </Text>
          <Text style={[styles.month, styles.day]}>
            {getDay(props.endDate)}
          </Text>
        </View>
      )}
    </View>
  );
};

const getMonth = (date) => { // yyyy-mm-dd
  return new Date(date).toLocaleString(env.locale, { month: 'short' });
};

const getDay = (date) => { // yyyy-mm-dd
  return new Date(date).getDate();
};


const barHeight = getHeight(5);

const styles = StyleSheet.create({
  withdrawInfoBar: {
    backgroundColor: theme.colors.shade2,
  },
  bar: {
    borderRadius: getWidth(10),
    height: barHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeBar: {
    backgroundColor: theme.colors.floos1,
    minWidth: barHeight,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  dateContainer: {
    padding: getWidth(3),
  },
  month: {
    textTransform: 'uppercase',
    fontSize: getWidth(3),
  },
  day: {
    fontSize: getWidth(4),
    fontWeight: '800',
    alignSelf: 'center',
  },
  startDate: {
    color: theme.colors.screenBackgroundColorLight,
  },
  today: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: - barHeight / 6,
    color: theme.colors.floos1,
    fontWeight: '600'
  },
  endDateContainer: {
    flexGrow: 0,
  },
  endDate: {
    color: theme.colors.textDark
  }
});

export default WithdrawInfoBar;