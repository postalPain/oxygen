import { StatusBar, StyleSheet } from 'react-native';
import { SCREEN_BOTTOM_PADDING, SCREEN_HORIZONTAL_PADDING } from 'utils/screen';
import theme from 'config/theme';
import env from 'env';
import { getHeight, getWidth } from 'utils/window';

const HEADER_HEIGHT = getHeight(16);

const getHeaderShift = () => {
  const shift = -(HEADER_HEIGHT);
  return env.ios ? shift : (shift + StatusBar.currentHeight);
};

export const HEADER_SHIFT = getHeaderShift();

const useStyles = () => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: getHeight(3),
  },
  header: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: HEADER_HEIGHT,
    paddingHorizontal: getWidth(4),
  },
  topPadding: {
    width: '100%',
  },
  headerPlaceholder: {
    minHeight: HEADER_HEIGHT,
  },
  logoContainer: {
    alignItems: 'center',
    width: getWidth(35),
    height: getHeight(5),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
  bottomPadding: {
    width: '100%',
    height: SCREEN_BOTTOM_PADDING,
  },
});

export default useStyles;
