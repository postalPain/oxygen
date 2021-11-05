import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectNotifications } from 'modules/notifications/selectors';
import { NotificationTypes } from 'modules/notifications/types';
import IconInfo from 'components/IconInfo';
import theme from 'config/theme';
import useStyles from './styles';

const InAppNotification = () => {
  const styles = useStyles();
  const notifications = useSelector(selectNotifications);
  return (
    <>
      {notifications.map((notification) => {
        return (
          <SafeAreaView
            key={notification.id}
            style={{
              ...styles.safeArea,
              ...styles[notification.type],
            }}
          >
            <View style={styles.notification}>
              <View style={styles.iconContainer}>
                <IconInfo color={theme.notifications[(notification.type === NotificationTypes.Error) ? 'errorTextColor' : 'successTextColor']} />
              </View>
              <View style={styles.textContainer}>
                {notification.title && (
                  <Text style={[styles.notificationTitle, styles[notification.type]]}>
                    {notification.title}
                  </Text>
                )}
                {notification.text && (
                  <Text style={[styles.notificationText, styles[notification.type]]}>
                    {notification.text}
                  </Text>
                )}
              </View>
            </View>
          </SafeAreaView>
        );
      })}
    </>
  );
};

export default InAppNotification;
