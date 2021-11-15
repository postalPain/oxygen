import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import {
  SCREEN_BOTTOM_PADDING,
  SCREEN_HORIZONTAL_PADDING,
  NAVIGATION_HEADER_HEIGHT,
} from 'utils/screen';
import env from 'env';


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
    marginBottom: 20,
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 24,
    paddingLeft: 12,
  },
  headerLabel: {
    marginLeft: 16,
    color: theme.colors.textDark,
    fontSize: 18,
  },
  headerText: {
    marginTop: 20,
    paddingLeft: 50,
    paddingRight: 40,
    color: theme.colors.textDark,
    fontSize: 18,
    letterSpacing: .5,
  },
  footer: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'space-between',
    marginBottom: SCREEN_BOTTOM_PADDING,
  },
  contactUs: {
    marginBottom: 40,
    paddingHorizontal: 45,
  },
  contactUsText: {
    color: theme.colors.textDark,
    fontSize: 18,
    letterSpacing: .5,
    lineHeight: 28,
  },
  contactUsLink: {
    fontSize: 18,
    textDecorationLine: 'underline',
    lineHeight: 28,
  },
});

export default useStyles;
