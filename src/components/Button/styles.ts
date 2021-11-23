import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getWidth, windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  button: {
    width: getWidth(84),
    height: getWidth(14),
    borderRadius: getWidth(14),
    overflow: 'hidden',
  },
  innerSecondary: {
    width: getWidth(84) - 2,
    height: getWidth(14) - 2,
    borderRadius: getWidth(14),
    backgroundColor: theme.colors.screenBackgroundColorLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearGradient: {
    width: getWidth(84),
    height: getWidth(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textPrimary: {
    color: theme.colors.screenBackgroundColorLight,
  },
  textSecondary: {
    color: theme.colors.textDark,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;