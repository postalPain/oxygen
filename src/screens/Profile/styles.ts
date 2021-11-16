import { StyleSheet } from 'react-native';
import { SCREEN_HORIZONTAL_PADDING } from 'utils/screen';
import theme from 'config/theme';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
  menuItem: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: .5,
    borderBottomColor: theme.colors.shade1,
  },
  menuItemNoBorder: {
    borderBottomWidth: 0,
  },
  menuItemText: {
    marginLeft: 20,
    fontSize: 20,
    letterSpacing: .5,
  },
  arrow: {
    position: 'absolute',
    top: '100%',
    right: 8,
  },
});

export default styles;