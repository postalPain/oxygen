import messaging from '@react-native-firebase/messaging';
import Link from 'components/Link';
import SettingsPushNotifications from 'components/SettingsPushNotifications';
import { setItem } from 'modules/asyncStorage';
import useLogger from 'modules/logger/hooks/useLogger';
import { pushesStoredKeys, usePushMessages, usePushSettings } from 'modules/pushNotifications/hooks/usePushNotifications';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { uuid } from 'utils/uuid';

const DebugPush = () => {
  const { getToken } = usePushSettings();
  const { message, simulateMessage } = usePushMessages('transaction_details');
  const { log } = useLogger();

  useEffect(() => {
    log('transactionDetailsPush', message);
  }, [message]);


  return (
    <View>
      <Link onPress={async () => {
        const _fcmToken = await messaging().getToken();
        setItem(pushesStoredKeys.fcmToken, _fcmToken);

        log('newToken', _fcmToken);
      }}
      >
        New token
      </Link>
      <Link onPress={async () => {
        await messaging().deleteToken();
        log('Token deleted');
      }}
      >
        Delete token
      </Link>
      <Link onPress={async () => {
        simulateMessage({
          messageId: '123',
          notification:
          { body: 'SimBody1', title: 'SimTitled' },
          data: {
            transaction_id: uuid(),
            topic: 'transaction_details'
          }
        });
      }}
      >
        Simulate Transaction Details Message
      </Link>
      <SettingsPushNotifications />

    </View>
  );
};

export default DebugPush;