import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  withdrawalTagSmall: {
    height: 0.1 * windowDimensions.height,
    flex: 1,
    backgroundColor: theme.colors.shade2,
    borderRadius: 0.012 * windowDimensions.height,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 0.07 * windowDimensions.width
  },
  textContainer: {
    alignItems: 'flex-start',
    color: theme.colors.floos2,

  },
  amount: {
    fontSize: 28,
    fontWeight: '700',
  },
  textSecondary: {
  }
});

export default styles;