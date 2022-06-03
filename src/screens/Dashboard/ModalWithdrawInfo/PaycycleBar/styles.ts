import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

export const paycycleBarHeight = getHeight(5.5);

export const styles = StyleSheet.create({
  withdrawInfoBar: {
    backgroundColor: theme.colors.shade2,
  },
  bar: {
    borderRadius: getHeight(5),
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
    paddingHorizontal: getHeight(1.5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  month: {
    textTransform: 'uppercase',
    fontSize: getHeight(1.3),
  },
  day: {
    fontSize: getHeight(1.7),
    fontWeight: '800',
    alignSelf: 'center',
  },
  startDate: {
    color: theme.colors.screenBackgroundColorLight,
  },
  todayContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: - paycycleBarHeight / 4,
  },
  today: {
    position: 'absolute',
    alignSelf: 'center',
    color: theme.colors.floos1,
    fontWeight: '600',
    fontSize: getHeight(1.7),
  },
  endDateContainer: {
    flexGrow: 0,
  },
  endDate: {
    color: theme.colors.textDark
  }
});