import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_HORIZONTAL_PADDING } from 'utils/screen';

const useStyles = () => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  container: {
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  }
});

export default useStyles;