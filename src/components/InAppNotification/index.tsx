import React, { useEffect, useRef } from 'react';
import { Notification } from 'react-native-in-app-message';
import { useSelector } from 'react-redux';
import { selectNotifications } from '../../modules/notifications/selectors';
import { View, Text } from 'react-native';

const InAppNotification = () => {
  const notifications = useSelector(selectNotifications);
  const notificationRef = useRef(null);
  useEffect(
    () => {
      console.log('notifications ==>>>>', notifications);
      if (notifications.length) {
        notificationRef?.current?.show();
      } else {
        notificationRef?.current?.hide();
      }
    },
    [notifications]
  );
  return (
    <Notification
      hideStatusBar={false}
      textColor={'red'}
      showKnob={false}
      ref={notificationRef}
      text={notifications?.[0]?.text || ''}
      customComponent={
        <View>
          <Text>title</Text>
          <Text>text</Text>
        </View>
      }
    />
  );
};

export default InAppNotification;
