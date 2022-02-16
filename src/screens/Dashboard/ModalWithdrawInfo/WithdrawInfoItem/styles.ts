import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

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
    color: theme.colors.floos2,
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

export default styles;