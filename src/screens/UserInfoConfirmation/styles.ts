import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import {
  SCREEN_BOTTOM_PADDING,
  SCREEN_HORIZONTAL_PADDING,
  NAVIGATION_HEADER_HEIGHT,
} from 'utils/screen';
import { getHeight, getWidth } from 'utils/window';


const useStyles = () => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
    paddingTop: NAVIGATION_HEADER_HEIGHT,
  },
  header: {
    marginBottom: getHeight(2.5),
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: getHeight(2.5),
    paddingLeft: getWidth(2),
  },
  headerLabel: {
    marginLeft: getWidth(4.5),
    color: theme.colors.textDark,
    fontSize: getWidth(4.5),
    letterSpacing: .5,
  },
  headerText: {
    marginTop: getHeight(2.5),
    paddingLeft: getWidth(11.8),
    paddingRight: getWidth(8),
    color: theme.colors.textDark,
    fontSize: getWidth(4.5),
    letterSpacing: .5,
    lineHeight: getHeight(3)
  },
  footer: {
    flex: 1,
    marginTop: getHeight(2.5),
    justifyContent: 'space-between',
    marginBottom: SCREEN_BOTTOM_PADDING,
  },
  contactUs: {
    marginBottom: getHeight(4),
    paddingHorizontal: getHeight(5),
  },
  contactUsText: {
    color: theme.colors.textDark,
    fontSize: getWidth(4.5),
    letterSpacing: .5,
    lineHeight: getHeight(3),
  },
  contactUsLink: {
    color: theme.colors.floos2,
    fontSize: getWidth(4.5),
    textDecorationLine: 'underline',
    lineHeight: getHeight(3),
  },
});

export default useStyles;
