import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_BOTTOM_PADDING } from 'utils/screen';
import { windowDimensions } from 'utils/window';

const useStyles = () => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: SCREEN_BOTTOM_PADDING,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '42%',
    paddingBottom: 22,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 41,
    height: 41,
    borderRadius: 41,
    backgroundColor: theme.colors.floos1,
    marginBottom: 44,
  },
  headerText: {
    fontSize: 22,
    lineHeight: 23,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 40,
  },
  contentText: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
  },
  imageWrapper: {
    paddingTop: '10%',
  },
  image: {
    width: 0.5 * windowDimensions.width,
  },
});

export default useStyles;
