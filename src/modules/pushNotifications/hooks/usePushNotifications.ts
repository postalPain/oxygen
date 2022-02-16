import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import env from 'env';
import { getItem, getItemForUser, setItem, setItemForUser } from 'modules/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { checkNotifications, PermissionStatus, requestNotifications } from 'react-native-permissions';
import { useSelector } from 'react-redux';

export enum pushesStoredKeys {
  fcmToken = 'fcmToken',
  pushEnabled = 'pushEnabled',
}

type OnMessage = (message: FirebaseMessagingTypes.RemoteMessage) => Promise<any>;

export const usePushNotifications = (onMessage?: OnMessage) => {
  const email = useSelector(selectUserEmail);
  const [enabled, setEnabled] = useState<boolean>();
  const [permissions, setPermissions] = useState<PermissionStatus>();
  const [fcmToken, setFcmToken] = useState<string>();

  const pushNotRequested = permissions === 'denied';

  useEffect(() => {
    (async () => {
      const _permissions = await checkNotifications();
      setPermissions(_permissions.status);

      const _enabled = await getItemForUser(email, pushesStoredKeys.pushEnabled);
      setEnabled(_enabled && _permissions.status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    (async () => {
      let _fcmToken = await getItem(pushesStoredKeys.fcmToken);
      if (!_fcmToken) {
        _fcmToken = await messaging().getToken();
        setItem(pushesStoredKeys.fcmToken, _fcmToken);
      }
      setFcmToken(_fcmToken);
    })();

    onMessage && messaging().onMessage(onMessage);
    onMessage && messaging().setBackgroundMessageHandler(onMessage);
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
    pushNotRequested,
    fcmToken,
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
