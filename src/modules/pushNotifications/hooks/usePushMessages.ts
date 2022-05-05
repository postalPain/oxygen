import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { useEffect, useState } from 'react';

export const usePushMessages = <TData>(topic?: string) => {
  type TMessage = FirebaseMessagingTypes.RemoteMessage & {data: TData};
  const [message, setMessage] = useState<TMessage>(null);

  const onMessage = (_message: TMessage): any => {
    if (!topic || (topic === _message.data.topic)) {
      setMessage(_message);
    }
  };
  useEffect(() => {
    messaging().getInitialNotification().then(onMessage);
    const unsubscribeMessage = messaging().onMessage(onMessage);
    const unsubscribeNotificationOpenedApp = messaging().onNotificationOpenedApp(onMessage);
    return () => {
      unsubscribeMessage();
      unsubscribeNotificationOpenedApp();
    };
  }, []);

  return {
    simulateMessage: (_message: TMessage) => {
      onMessage(_message);
    },
    message,
  };
};