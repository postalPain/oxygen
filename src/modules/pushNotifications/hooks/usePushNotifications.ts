import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import env from 'env';
import { getItem, getItemForUser, setItem, setItemForUser } from 'modules/asyncStorage';
import useLogger from 'modules/logger/hooks/useLogger';
import { selectUserEmail } from 'modules/user/selectors';
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { checkNotifications, PermissionStatus, requestNotifications } from 'react-native-permissions';
import { useSelector } from 'react-redux';
import { uuid } from 'utils/uuid';
import { analytics } from 'services/analytics';

export enum pushesStoredKeys {
  fcmToken = 'fcmToken',
  pushEnabled = 'pushEnabled',
}

export const usePushSettings = () => {
  const email = useSelector(selectUserEmail);
  const [enabled, setEnabled] = useState<boolean>();
  const [permissions, setPermissions] = useState<PermissionStatus>();

  useEffect(() => {
    (async () => {
      const _permissions = await checkNotifications();
      setPermissions(_permissions.status);

      const _enabled = await getItemForUser(email, pushesStoredKeys.pushEnabled);
      setEnabled(_enabled && _permissions.status === 'granted');
    })();
  }, []);

  useEffect(() => {
    analytics.setUserProperties({ pushNotificationsEnabled: !!enabled });
  }, [enabled]);

  const requestPermissions = async (): Promise<PermissionStatus> => {
    let permissionStatus: PermissionStatus;
    if (env.ios) {
      const _permissions = await requestNotifications(['alert', 'sound']);
      permissionStatus = _permissions.status;
    } else {
      permissionStatus = 'granted';
    }
    setPermissions(permissionStatus);

    return permissionStatus;
  };

  const requestPushes = async (_email?: string) => {
    const newStatus = await requestPermissions();

    if (newStatus === 'granted') {
      setItemForUser(_email, pushesStoredKeys.pushEnabled, true);
      setEnabled(true);
    }
    return newStatus;
  };


  return {
    pushEnabled: enabled,
    pushPermissions: permissions,
    pushNotRequested: permissions === 'denied',
    getToken: async () => {
      const token = await messaging().getToken();
      return token;
    },
    requestPushes,
    turnOnPushes: async () => {
      const { status } = await checkNotifications();

      if (status === 'granted') {
        await setItemForUser(email, pushesStoredKeys.pushEnabled, true);
        setEnabled(true);
      } else if (status === 'denied') { // Hasn't been requested
        requestPushes();
      } else {
        Linking.openSettings();
      }
    },
    turnOffPushes: async () => {
      await setItemForUser(email, pushesStoredKeys.pushEnabled, false);
      await messaging().deleteToken();
      setEnabled(false);
    },

    ...(env.e2e && {
      pushEnabled: false,
      requestPushes: (mail?: string) => {
        return null;
      },
    })
  };
};

export const usePushMessages = <T>(topic?: string) => {
  type TMessage = FirebaseMessagingTypes.RemoteMessage & {data: T};
  const [message, setMessage] = useState<TMessage>(null);

  const logger = useLogger();
  useEffect(() => {
    const onMessage = (_message: TMessage): any => {
      logger.log('topic', uuid(), topic);
      logger.log('_message', _message);
      if (!topic || (topic === _message.data.topic)) {
        logger.log('setting message');
        setMessage(_message);
      }
    };

    messaging().onMessage(onMessage);
    messaging().setBackgroundMessageHandler(onMessage);
  }, []);

  return {
    simulateMessage: (_message: TMessage) => {
      // onMessage(_message);
    },
    message,
  };
};


