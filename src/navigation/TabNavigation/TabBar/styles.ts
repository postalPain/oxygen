import { StyleSheet } from 'react-native';
import theme from 'config/theme';

export const TAB_BAR_HEIGHT = 100;

const useStyles = () => StyleSheet.create({
  tabBarContainer: {
    height: TAB_BAR_HEIGHT,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: theme.colors.shade1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  tabBarIconWrapper: {
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 8,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
  }
});

export default useStyles;
