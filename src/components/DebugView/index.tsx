import { Link } from 'components';
import { storeBiometricsAccepted } from 'modules/biometrics/asyncStorage';
import { setLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';


import { usePushNotifications } from 'modules/pushNotifications/hooks/usePushNotifications';
import SettingsPushNotifications from 'components/SettingsPushNotifications';
import AsyncStorage from '@react-native-community/async-storage';
import { selectLoggerMessages } from 'modules/logger/selectors';
import { getWidth } from 'utils/window';
import { logMessage } from 'modules/logger/actions';
import usePushTransactionDetails from 'modules/transactions/pushNotifications/usePushTransactionDetails';
import SettingsBiometrics from 'components/SettingsBiometrics';

const DebugView = () => {
  const dispatch = useDispatch();
  // const email = useSelector(selectUserEmail);
  const loggerMessages = useSelector(selectLoggerMessages);
  const { fcmToken, message } = usePushTransactionDetails();

  useEffect(() => {
    dispatch(logMessage('transactionDetailsPush', message));
  }, [message]);

  useEffect(() => {
    if (!fcmToken) {
      return;
    }
    dispatch(logMessage('fcmToken', fcmToken));
  }, [fcmToken]);

  return (
    <ScrollView>
      <Link onPress={() => AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
          stores.map((result, i, store) => {
            dispatch(logMessage({ [store[i][0]]: store[i][1] }));
            return true;
          });
        });
      })}
      >
        Show AsyncStorage
      </Link>
      <Link onPress={async () => {
        const _fcmToken = await messaging().getToken();

        dispatch(logMessage('newToken', _fcmToken));
      }}
      >
        New token
      </Link>
      <SettingsPushNotifications />
      <SettingsBiometrics />
      { loggerMessages.reverse().map(message => (
        <Text selectable style={{ fontSize: getWidth(3) }} >
          <Text>{message.time} </Text>
          <Text> {message.message}</Text>
        </Text>
      ))}

    </ScrollView>
  );
};

export default DebugView;