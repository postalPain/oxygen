import messaging from '@react-native-firebase/messaging';
import Link from 'components/Link';
import SettingsPushNotifications from 'components/SettingsPushNotifications';
import { setItem } from 'modules/asyncStorage';
import useLogger from 'modules/logger/hooks/useLogger';
import { pushesStoredKeys } from 'modules/pushNotifications/hooks/usePushNotifications';
import usePushTransactionDetails from 'modules/transactions/pushNotifications/usePushTransactionDetails';
import React, { useEffect } from 'react';
import { View } from 'react-native';

const DebugPush = () => {
  const { fcmToken, message } = usePushTransactionDetails();
  const { log } = useLogger();

  useEffect(() => {
    log('transactionDetailsPush', message);
  }, [message]);

  useEffect(() => {
    if (!fcmToken) {
      return;
    }
    log('fcmToken', fcmToken);
  }, [fcmToken]);

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
      }}
      >
        Delete token
      </Link>
      <SettingsPushNotifications />

    </View>
  );
};

export default DebugPush;