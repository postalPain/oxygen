import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { NAVIGATION_HEADER_HEIGHT } from 'utils/screen';


export const headerStyles = {
  headerStyle: {
    backgroundColor: theme.colors.screenBackgroundColorLight,
    shadowOpacity: 0,
    elevation: 0,
    height: NAVIGATION_HEADER_HEIGHT,
  },
  headerTintColor: theme.colors.textDark,
};

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
