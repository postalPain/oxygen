import { StyleSheet } from 'react-native';
import env from 'env';
import { SCREEN_HORIZONTAL_PADDING } from 'utils/screen';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
  gradient: {
    position: 'absolute',
    top: 0,
  },
  header: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 25,
    paddingTop: .09 * env.dimensions.height,
    paddingLeft: 8,
  },
  headerText: {
    marginLeft: 16,
    color: theme.colors.textDark,
    fontSize: 18,
    letterSpacing: .5,
    textTransform: 'uppercase',
  },
});

export default useStyles;