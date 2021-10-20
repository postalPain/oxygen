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
  headerText: {
    color: theme.colors.headerTextColor,
    fontSize: 20,
  }
});

export default useStyles;
