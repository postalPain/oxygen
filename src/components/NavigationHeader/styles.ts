import { StyleSheet } from 'react-native';
import { NAVIGATION_HEADER_HEIGHT } from 'utils/screen';
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
    height: env.ios ? NAVIGATION_HEADER_HEIGHT : (NAVIGATION_HEADER_HEIGHT + 24),
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  headerLeft: {
    flex: 1,
  },
  headerTitle: {
    flex: 4,
  },
  title: {
    color: theme.colors.textDark,
    fontSize: 20,
    letterSpacing: .5,
    textAlign: 'center',
  },
  headerRight: {
    flex: 1,
  },
  headerLink: {
    color: theme.colors.floos1,
    fontSize: 20,
  },
});

export default useStyles;
