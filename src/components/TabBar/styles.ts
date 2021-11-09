import { StyleSheet } from 'react-native';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  tabBarContainer: {
    height: 84,
    borderTopWidth: 1,
    borderTopColor: theme.colors.shade1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  iconWrapper: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: 8,
  },
});

export default useStyles;
