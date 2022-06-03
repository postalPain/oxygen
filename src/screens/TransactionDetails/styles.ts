import { StyleSheet } from 'react-native';
import { SCREEN_HORIZONTAL_PADDING } from 'utils/screen';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';
import env from 'env';

const useStyles = () => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
    paddingTop: getHeight(env.ios ? 0 : 10),
  },
  gradient: {
    position: 'absolute',
    top: 0,
  },
  header: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: getHeight(3),
    paddingTop: getHeight(9),
    paddingLeft: getWidth(3),
  },
  headerText: {
    marginLeft: getWidth(4),
    color: theme.colors.textDark,
    fontSize: getWidth(4),
    textTransform: 'uppercase',
  },
});

export default useStyles;