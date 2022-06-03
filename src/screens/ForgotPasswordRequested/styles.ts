import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_BOTTOM_PADDING } from 'utils/screen';
import { getHeight, getWidth } from 'utils/window';

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
    height: getHeight(29),
    paddingHorizontal: getWidth(9),
    paddingBottom: getHeight(3),
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidth(10),
    height: getWidth(10),
    borderRadius: getWidth(10),
    backgroundColor: theme.colors.floos2,
    marginBottom: getHeight(5),
  },
  headerText: {
    fontSize: getHeight(2.5),
    textAlign: 'center',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: getWidth(15),
  },
  emailTag: {
    alignSelf: 'center',
  },
  contentText: {
    paddingTop: getHeight(3),
    fontSize: getHeight(2.3),
    lineHeight: getHeight(3),
    textAlign: 'center',
  },
  imageWrapper: {
    paddingTop: getHeight(4),
  },
  image: {
    width: getHeight(30),
  },
});

export default useStyles;
