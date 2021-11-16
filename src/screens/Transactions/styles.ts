import { StyleSheet } from 'react-native';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  container: {
    width: '100%',
    flex: 1,
  }
});

export default useStyles;