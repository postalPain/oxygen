import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

export const paycycleBarHeight = getHeight(5);

export const styles = StyleSheet.create({
  withdrawInfoBar: {
    backgroundColor: theme.colors.shade2,
  },
  bar: {
    borderRadius: getWidth(10),
    height: paycycleBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeBar: {
    backgroundColor: theme.colors.floos1,
    minWidth: paycycleBarHeight,
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
    bottom: - paycycleBarHeight / 6,
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