import { StatusBar, StyleSheet } from 'react-native';
import { getSizeForLayout, SCREEN_PADDING } from 'utils/screen';
import theme from 'config/theme';
import env from 'env';

const getHeaderShift = () => {
  const shift = -(HEADER_HEIGHT);
  return env.ios ? shift : (shift + StatusBar.currentHeight);
};

export const HEADER_HEIGHT = getSizeForLayout(40);
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
    paddingBottom: getSizeForLayout(12),
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: HEADER_HEIGHT,
    paddingHorizontal: getSizeForLayout(12),
    paddingTop: 38,
  },
  topPadding: {
    height: 10,
    width: '100%',
  },
  headerPlaceholder: {
    minHeight: HEADER_HEIGHT,
  },
  logoContainer: {
    alignItems: 'center',
    width: getSizeForLayout(66),
    height: getSizeForLayout(22),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: getSizeForLayout(SCREEN_PADDING),
  },
  bottomPadding: {
    width: '100%',
    height: getSizeForLayout(26),
  },
});

export default useStyles;
