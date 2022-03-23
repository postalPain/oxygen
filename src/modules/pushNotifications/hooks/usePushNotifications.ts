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
import { uuid } from 'utils/uuid';

export enum pushesStoredKeys {
  fcmToken = 'fcmToken',
  pushEnabled = 'pushEnabled',
}

// interface OnMessage<T> {
//   (arg: FirebaseMessagingTypes.RemoteMessage & {data: T}): any;
// }

export const usePushNotifications = () => {
  const dispatch = useDispatch();
  const logger = useLogger();
  const email = useSelector(selectUserEmail);
  const [enabled, setEnabled] = useState<boolean>();
  const [permissions, setPermissions] = useState<PermissionStatus>();
  const [fcmToken, setFcmToken] = useState<string>();

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

    pushOutOfApp.subscribe(onMessage);

    return () => pushOutOfApp.unsubscribe(onMessage);
    // messaging().onMessage(onMessage);
    // messaging().setBackgroundMessageHandler(onMessage);
  }, []);

  useEffect(() => {
    console.log('message change', message);

  }, [message]);

  return {
    simulateMessage: (_message: TMessage) => {
      // onMessage(_message);
      _messaging.dispatch(_message);
    },
    message,
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
    this.messaging().setBackgroundMessageHandler(onMessage);
    // this.messaging().onMessage(onMessage);
  },
  subscribe (handler) {
    this.messages.forEach((message) => {
      handler(message);
    });
    console.log('pushing handler');

    this.handlers.push(handler);
    console.log('handlers count:', this.handlers.length);

  },
  unsubscribe (_handler) {
    console.log('unsubscribing');

    this.handlers = this.handlers.filter(handler => handler !== _handler);
  },
};


