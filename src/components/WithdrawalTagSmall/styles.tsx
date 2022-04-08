import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth, windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  withdrawalTagSmall: {
    flex: 1,
    backgroundColor: theme.colors.shade2,
    borderRadius: getWidth(6),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: getWidth(7),
    paddingVertical: getHeight(3.3),
  },
  textContainer: {
    textAlign: 'left',
    alignItems: 'flex-start',
    color: theme.colors.floos2,
  },
  amount: {
    fontSize: getWidth(7),
    lineHeight: getHeight(5),
    fontWeight: '700',
  },
  textSecondary: {
  }
});

export default styles;
