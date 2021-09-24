import { StyleSheet } from 'react-native';
import theme from 'config/theme';

export const NOTIFICATION_HEIGHT = 100;

const useStyles = () => StyleSheet.create({
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: -10,
    left: 0,
    height: NOTIFICATION_HEIGHT,
    width: '100%',
    paddingTop: 26,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 46,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    shadowColor: theme.notifications.boxShadowColor,
    shadowOffset: theme.notifications.boxShadowOffset,
    shadowOpacity: 0.25,
    elevation: 5,
    zIndex: 1,
  },
  error: {
    backgroundColor: theme.notifications.errorBackground,
    color: theme.notifications.errorTextColor,
  },
  iconContainer: {},
  textContainer: {
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
