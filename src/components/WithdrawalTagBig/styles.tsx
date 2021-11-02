import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  availableToWithdraw: {
    height: 0.15 * windowDimensions.height,
    alignSelf: 'stretch',
    backgroundColor: theme.colors.shade2,
    borderRadius: 0.025 * windowDimensions.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignSelf: 'flex-end',
  },
  walletContainer: {
    paddingRight: 7
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    fontSize: 46,
    color: theme.colors.floos1,
    fontWeight: '700',
  },
  currency: {
    color: theme.colors.floos1,
    alignSelf: 'flex-end'
  }
});

export default styles;