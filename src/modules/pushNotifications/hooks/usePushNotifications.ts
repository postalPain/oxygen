import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import env from 'env';
import { getItem, getItemForUser, setItem, setItemForUser } from 'modules/asyncStorage';
import { logMessage } from 'modules/logger/actions';
import useLogger from 'modules/logger/hooks/useLogger';
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
  type TMessage = FirebaseMessagingTypes.RemoteMessage & {data: T};
  const dispatch = useDispatch();
  const logger = useLogger();
  const email = useSelector(selectUserEmail);
  const [enabled, setEnabled] = useState<boolean>();
  const [permissions, setPermissions] = useState<PermissionStatus>();
  const [fcmToken, setFcmToken] = useState<string>();
  const [message, setMessage] = useState<TMessage>(null);

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

  const onMessage = (_message: TMessage): any => {
    logger.log('message', _message);
    logger.log('topic', topic);
    logger.log('_message.data.topic', _message.data.topic);
    if (!topic || (topic === _message.data.topic)) {
      logger.log('!topic || (topic === _message.data.topic)');
      logger.log('setting message', message);
      setMessage(_message);
    }
  };

  useEffect(() => {
    if (!enabled) {
      return;
    }

    pushOutOfApp.subscribe(onMessage);
    // messaging().onMessage(onMessage);

    // messaging().setBackgroundMessageHandler(onMessage);
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
    simulateMessage: (_message: TMessage) => {
      // onMessage(_message);
      _messaging.dispatch(_message);
    },
    ...(env.e2e && {
      pushEnabled: false,
      requestPushes: (mail?: string) => {
        return null;
      },
    })
  };
};

// import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
const _messaging = {
  handlers: [],
  onMessage(handler) {
    this.handlers.push(handler);
  },
  setBackgroundMessageHandler(handler) {
    this.onMessage(handler);
  },
  dispatch(message) {
    console.log('dispatch message', message);
    console.log('this.handlers.length', this.handlers.length);

    this.handlers.forEach(handler => {
      handler(message);
    });
  }
};

export const pushOutOfApp = {
  messages: [],
  handlers: [],
  messaging: () => _messaging,
  init () {
    console.log('init');

    const onMessage = async (message) => {
      this.messages.push(message);
      this.handlers.forEach(handler => {
        handler(message);
      });
    };
    this.messaging().onMessage(onMessage);
    this.messaging().setBackgroundMessageHandler(onMessage);
  },
  subscribe (handler) {
    this.messages.forEach((message) => {
      handler(message);
    });
    this.handlers.push(handler);
  },
  unsubscribe (_handler) {
    this.handlers = this.handlers.filter(handler => handler !== _handler);
  },
};


