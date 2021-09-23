import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { selectNotifications } from '../../modules/notifications/selectors';
import useStyles from './styles';

const InAppNotification = () => {
  const styles = useStyles();
  const notifications = useSelector(selectNotifications);
 
  return (
    <>
      {notifications.map((notification) => {
        return (
          <View
            key={notification.id}
            style={[styles.notification, styles[notification.type]]}
          >
            <View style={styles.iconContainer}>
              <Image
                source={require('../../../assets/info-circle.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.notificationTitle, styles[notification.type]]}>
                {notification.title}
              </Text>
              <Text style={[styles.notificationText, styles[notification.type]]}>
                {notification.text}
              </Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default InAppNotification;
