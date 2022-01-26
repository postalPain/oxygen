import { Link } from 'components';
import { log } from 'console';
import { storeBiometricsAccepted } from 'modules/biometrics/asyncStorage';
import { infoNotification } from 'modules/notifications/actions';
import { setLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import messaging from '@react-native-firebase/messaging';






const DebugView = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  const [text, setText] = useState<string>('');

  useEffect(() => {
    (async () => {
      const perm = await messaging().requestPermission();
      console.log('perm', perm);

      setText(text => `${text}\nperm:${ perm}`);

      console.log('messaging.AuthorizationStatus.AUTHORIZED', messaging.AuthorizationStatus.AUTHORIZED);

      console.log('messaging.AuthorizationStatus.PROVISIONAL', messaging.AuthorizationStatus.PROVISIONAL);
    })();


    // Note that an async function or a function that returns a Promise
    // is required for both subscribers.
    async function onMessageReceived(message) {
      // Do something
      console.log('message', message);
      setText(text => `${text}\nmessage:${ message}`);
    }

    messaging().onMessage(onMessageReceived);
    messaging().setBackgroundMessageHandler(onMessageReceived);

    (async () => {
      const fcmToken = await messaging().getToken();
      console.log('token', fcmToken);
      setText(text => `${text}\ntoken: ${fcmToken}`);

    })();


  }, []);
  return (
    <ScrollView>
      <Link onPress={() => setLoginCount(email, 0)}>
        Clear loginCount
      </Link>
      <Link onPress={() => storeBiometricsAccepted(email, false)}>
        Reset Biometrics Permission
      </Link>
      <Text>
        {text}
      </Text>
    </ScrollView>
  );
};

export default DebugView;