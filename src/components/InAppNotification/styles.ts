import { StyleSheet } from 'react-native';
import theme from 'config/theme';

export const NOTIFICATION_HEIGHT = 100;

const useStyles = () => StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: -10,
    left: 0,
    shadowColor: theme.notifications.boxShadowColor,
    shadowOffset: theme.notifications.boxShadowOffset,
    shadowOpacity: 0.25,
    elevation: 5,
    zIndex: 1,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: NOTIFICATION_HEIGHT,
    width: '100%',
    paddingTop: 26,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 46,
    backgroundColor: 'transparent',
  },
  error: {
    backgroundColor: theme.notifications.errorBackground,
    color: theme.notifications.errorTextColor,
  },
  success: {
    backgroundColor: theme.colors.screenBackgroundColorLight,
    color: theme.notifications.successTextColor,
  },
  successMessage: {
    backgroundColor: theme.colors.successMessageBackground,
    color: theme.colors.successMessageText,
  },
  iconContainer: {},
  textContainer: {
    justifyContent: 'center',
    marginLeft: 22,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  notificationText: {
    fontSize: 16,
  },
});

export default useStyles;
