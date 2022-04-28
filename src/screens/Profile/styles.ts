import { StyleSheet } from 'react-native';
import { SCREEN_HORIZONTAL_PADDING } from 'utils/screen';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';

const styles = StyleSheet.create({
  screenWrapper: {
    paddingTop: getHeight(26),
  },
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
    paddingVertical: getHeight(2.2),
    borderBottomWidth: .5,
    borderBottomColor: theme.colors.shade1,
  },
  menuItemNoBorder: {
    borderBottomWidth: 0,
  },
  menuItemText: {
    marginLeft: getWidth(5),
    fontSize: getWidth(5),
    letterSpacing: .5,
  },
  menuItemTextHighlighted: {
    color: theme.colors.floos3,
  },
  arrow: {
    position: 'absolute',
    right: getWidth(2),
  },
  versionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  version: {
    color: theme.colors.shade1,
    fontSize: getWidth(5)
  }
});

export default styles;
