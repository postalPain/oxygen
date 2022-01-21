import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { NAVIGATION_HEADER_HEIGHT } from 'utils/screen';
import { getHeight } from 'utils/window';


export const headerStyles = {
  headerStyle: {
    backgroundColor: theme.colors.screenBackgroundColorLight,
    shadowOpacity: 0,
    elevation: 0,
    height: NAVIGATION_HEADER_HEIGHT,
  },
  headerTintColor: theme.colors.textDark,
};

export const modalScreenStyles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
    height: getHeight(12),
    paddingBottom: getHeight(4),
    // TODO fix shadow, remove border
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.shade1,
    shadowColor: theme.notifications.boxShadowColor,
    shadowOffset: theme.notifications.boxShadowOffset,
  },
});

export const homeNavStyles = StyleSheet.create({
  headerText: {
    color: theme.colors.textDark,
  }
});

export const homeHeaderOptions = {
  ...headerStyles,
  headerTransparent: true,
  headerBackTitleStyle: homeNavStyles.headerText,
  headerTintColor: theme.colors.textDark,
};
