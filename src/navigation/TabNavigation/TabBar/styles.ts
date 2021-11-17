import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';

export const TAB_BAR_HEIGHT = getHeight(10);

const useStyles = () => StyleSheet.create({
  tabBarContainer: {
    height: TAB_BAR_HEIGHT,
    paddingHorizontal: getWidth(5),
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
    paddingTop: getHeight(1),
  },
  label: {
    marginTop: getHeight(0.5),
    fontSize: getWidth(3),
  }
});

export default useStyles;
