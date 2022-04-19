import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import useLogger from 'modules/logger/hooks/useLogger';
import { useEffect, useState } from 'react';
import { uuid } from 'utils/uuid';

export const usePushMessages = <T>(topic?: string) => {
  type TMessage = FirebaseMessagingTypes.RemoteMessage & {data: T};
  const [message, setMessage] = useState<TMessage>(null);

  const logger = useLogger();
  const onMessage = (_message: TMessage): any => {
    logger.log('topic', uuid(), topic);
    logger.log('_message', _message);
    if (!topic || (topic === _message.data.topic)) {
      logger.log('setting message');
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