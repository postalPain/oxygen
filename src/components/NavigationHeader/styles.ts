import { StyleSheet } from 'react-native';
import { NAVIGATION_HEADER_HEIGHT } from 'utils/screen';
import { getHeight } from 'utils/window';
import env from 'env';
import theme from 'config/theme';


const useStyles = () => StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  header: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: env.ios ? NAVIGATION_HEADER_HEIGHT : (NAVIGATION_HEADER_HEIGHT + getHeight(4)),
    paddingBottom: getHeight(2),
    paddingHorizontal: getHeight(2),
  },
  headerLeft: {
    flex: 1,
  },
  headerTitle: {
    flex: 4,
  },
  title: {
    color: theme.colors.textDark,
    fontSize: getHeight(2.5),
    textAlign: 'center',
  },
  headerRight: {
    flex: 1,
  },
  headerLink: {
    color: theme.colors.floos1,
    fontSize: getHeight(2.5),
  },
});

export default useStyles;
