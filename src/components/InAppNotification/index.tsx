import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Animated, Text, View, Image } from 'react-native';
import { selectNotifications } from '../../modules/notifications/selectors';
import useStyles from './styles';

const InAppNotification = () => {
  const styles = useStyles();
  const notifications = useSelector(selectNotifications);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])
  return (
    <>
      {notifications.map((notification) => {
        return (
          <Animated.View
            key={notification.id}
            style={{
              ...styles.notification,
              ...styles[notification.type],
              opacity: fadeAnim,
            }}
          >
            <View style={styles.iconContainer}>
              <Image
                source={require('../../../assets/info_circle.png')}
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
          </Animated.View>
        );
      })}
    </>
  );
};

export default InAppNotification;
