import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getWidth } from 'utils/window';

const width = getWidth(84);

const styles = StyleSheet.create({
  button: {
    borderRadius: getWidth(14),
    overflow: 'hidden',
    width,
  },
  innerSecondary: {
    width: width - 2,
    height: getWidth(14) - 2,
    borderRadius: getWidth(14),
    backgroundColor: theme.colors.screenBackgroundColorLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearGradient: {
    height: getWidth(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: getWidth(5),
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