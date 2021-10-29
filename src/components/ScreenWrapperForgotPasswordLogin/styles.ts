import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  screenWrapperLogin: {
    width: windowDimensions.width,
    height: windowDimensions.height,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 0.36 * windowDimensions.height,
    paddingBottom: 0.03 * windowDimensions.height,
    paddingHorizontal: 0.1 * windowDimensions.width
  },
  check: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 41,
    height: 41,
    borderRadius: 41,
    backgroundColor: theme.colors.floosGragientColor1,
    marginBottom: 44,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  childrenContainer: {
    flex: 1,
    paddingHorizontal: 0.085 * windowDimensions.width,
    paddingTop: 0.01 * windowDimensions.height,
    paddingBottom: 0.09 * windowDimensions.height,
  },
});

export default styles;