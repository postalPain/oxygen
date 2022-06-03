import messaging from '@react-native-firebase/messaging';
import { useEffect, useState } from 'react';
import { IPushData, IPushMessage } from '../types';

export const usePushMessages = <TData extends IPushData>(topic?: string) => {
  const [message, setMessage] = useState<IPushMessage<TData>>(null);

  const onMessage = (_message): any => {
    if (!_message?.data) {
      return;
    }

    if (!topic || (topic === _message?.data?.topic)) {
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
    simulateMessage: (_message: IPushMessage<TData>) => {
      onMessage(_message);
    },
    message,
  };
};
