import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_HORIZONTAL_PADDING } from 'utils/screen';

const useStyles = () => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
  header: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 25,
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