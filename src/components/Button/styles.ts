import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  button: {
    width: windowDimensions.width * 0.84,
    height: windowDimensions.width * 0.14,
    borderRadius: windowDimensions.width * 0.14,
    overflow: 'hidden',
  },
  innerSecondary: {
    width: windowDimensions.width * 0.84 - 2,
    height: windowDimensions.width * 0.14 - 2,
    borderRadius: windowDimensions.width * 0.14,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearGradient: {
    height: '100%',
    width: '100%',
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