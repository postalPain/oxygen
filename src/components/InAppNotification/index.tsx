import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { selectNotifications } from 'modules/notifications/selectors';
import useStyles  from './styles';

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
                <Image
                  source={require('../../../assets/info_circle.png')}
                />
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
