import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getWidth, windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  withdrawalTagLarge: {
    height: 0.16 * windowDimensions.height,
    alignSelf: 'stretch',
    backgroundColor: theme.colors.shade2,
    borderRadius: getWidth(6),
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
    fontSize: 0.14 * windowDimensions.width,
    color: theme.colors.floos1,
    fontWeight: '700',
  },
  currency: {
    color: theme.colors.floos1,
    alignSelf: 'flex-end'
  }
});

export default styles;