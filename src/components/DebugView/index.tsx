import { Link } from 'components';
import { storeBiometricsAccepted } from 'modules/biometrics/asyncStorage';
import { setLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { usePushNotifications } from 'modules/pushNotifications/hooks/usePushNotifications';
import SettingsPushNotifications from 'components/SettingsPushNotifications';
import AsyncStorage from '@react-native-community/async-storage';
import { selectLoggerMessages } from 'modules/logger/selectors';
import { getWidth } from 'utils/window';
import { logMessage } from 'modules/logger/actions';

const DebugView = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const loggerMessages = useSelector(selectLoggerMessages);

  const {
    fcmToken,
  } = usePushNotifications();

  const [text, setText] = useState<string>('');

  // async function onMessageReceived(message: FirebaseMessagingTypes.RemoteMessage) {
  //   // Do something
  //   console.log('message', message);
  //   setText(text => `${text}\nmessage:${ JSON.stringify(message, null, 4)}`);
  // }

  useEffect(() => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log({ [store[i][0]]: store[i][1] });
          return true;
        });
      });
    });

    dispatch(logMessage('asd'));
  }, []);

  useEffect(() => {
    if (!fcmToken) {
      return;
    }
    console.log('fcmToken', fcmToken);
    setText(text => `${text}\nSetting token: ${fcmToken}`);
  }, [fcmToken]);

  return (
    <ScrollView>
      <Link onPress={() => setLoginCount(email, 0)}>
        Clear loginCount
      </Link>
      <SettingsPushNotifications />

      {
        loggerMessages.reverse().map(message => (
          <Text selectable style={{ fontSize: getWidth(3) }} >
            <Text>{message.time} </Text>
            <Text> {message.message}</Text>
          </Text>
        ))
      }

    </ScrollView>
  );
};

export default DebugView;