import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  withdrawalTagSmall: {
    height: 0.14 * windowDimensions.height,
    flex: 1,
    backgroundColor: theme.colors.shade2,
    borderRadius: 0.05 * windowDimensions.width,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 0.06 * windowDimensions.width
  },
  textContainer: {
    alignItems: 'flex-start',
    color: theme.colors.floos2,
  },
  amount: {
    fontSize: 0.1 * windowDimensions.width,
    fontWeight: '700',
  },
  textSecondary: {
  }
});

export default styles;