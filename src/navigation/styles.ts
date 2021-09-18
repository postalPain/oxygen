import { StyleSheet } from 'react-native';
import theme from 'config/theme';

import { HEADER_HEIGHT } from '../constants';

export const navStyles = StyleSheet.create({
  headerText: {
    color: theme.colors.textDark,
    fontWeight: '600',
  }
});

export const commonHeaderOptions = {
  headerStyle: {
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
    height: HEADER_HEIGHT,
  },
  headerBackTitleStyle: navStyles.headerText,
  headerTintColor: theme.colors.textDark,
  cardShadowEnabled: false,
  headerShown: true,
  title: '',
};

export const homeNavStyles = StyleSheet.create({
  headerText: {
    ...navStyles.headerText,
    color: theme.colors.textDark,
  }
});

export const homeHeaderOptions = {
  ...commonHeaderOptions,
  headerTransparent: true,
  headerBackTitleStyle: homeNavStyles.headerText,
  headerTintColor: theme.colors.textDark,
};
