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

const DebugView = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const {
    requestPushes: requestNotifications,
    fcmToken,
  } = usePushNotifications(onMessageReceived);

  const [text, setText] = useState<string>('');

  async function onMessageReceived(message: FirebaseMessagingTypes.RemoteMessage) {
    // Do something
    console.log('message', message);
    setText(text => `${text}\nmessage:${ JSON.stringify(message, null, 4)}`);
  }

  useEffect(() => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log({ [store[i][0]]: store[i][1] });
          return true;
        });
      });
    });
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
      <Link onPress={() => storeBiometricsAccepted(email, false)}>
        Reset Biometrics Permission
      </Link>
      <Link onPress={() => requestNotifications()}>
        Request Notifications
      </Link>
      <Text selectable>
        {text}
      </Text>
      <SettingsPushNotifications />
    </ScrollView>
  );
};

export default DebugView;