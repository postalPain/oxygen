import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import env from 'env';
import { getItem, getItemForUser, setItem, setItemForUser } from 'modules/asyncStorage';
import { logMessage } from 'modules/logger/actions';
import { selectUserEmail } from 'modules/user/selectors';
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { checkNotifications, PermissionStatus, requestNotifications } from 'react-native-permissions';
import { useDispatch, useSelector } from 'react-redux';

export enum pushesStoredKeys {
  fcmToken = 'fcmToken',
  pushEnabled = 'pushEnabled',
}

// interface OnMessage<T> {
//   (arg: FirebaseMessagingTypes.RemoteMessage & {data: T}): any;
// }

export const usePushNotifications = <T>(topic?: string) => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const [enabled, setEnabled] = useState<boolean>();
  const [permissions, setPermissions] = useState<PermissionStatus>();
  const [fcmToken, setFcmToken] = useState<string>();
  const [message, setMessage] = useState<FirebaseMessagingTypes.RemoteMessage & {data: T}>(null);

  useEffect(() => {
    (async () => {
      (async () => {
        let _fcmToken = await getItem(pushesStoredKeys.fcmToken);
        if (!_fcmToken) {
          _fcmToken = await messaging().getToken();
          setItem(pushesStoredKeys.fcmToken, _fcmToken);
        }
        setFcmToken(_fcmToken);
      })();

      const _permissions = await checkNotifications();
      setPermissions(_permissions.status);

      const _enabled = await getItemForUser(email, pushesStoredKeys.pushEnabled);
      setEnabled(_enabled && _permissions.status === 'granted');
    })();
  }, []);

  useEffect(() => {
    dispatch(logMessage('fcmToken', fcmToken));
  }, [fcmToken]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const onMessage = (_message: FirebaseMessagingTypes.RemoteMessage & {data: T}): any => {
      !topic || (topic === _message.data.topic) && setMessage(_message);
      dispatch(logMessage('message', _message));
    };

    messaging().onMessage(onMessage);
    messaging().setBackgroundMessageHandler(onMessage);
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
    fcmToken,
    message,
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
