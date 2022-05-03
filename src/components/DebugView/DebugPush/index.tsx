import messaging from '@react-native-firebase/messaging';
import Link from 'components/Link';
import SettingsPushNotifications from 'components/SettingsPushNotifications';
import { setItem } from 'modules/asyncStorage';
import { getLogger } from 'modules/logger';
import useLogger from 'modules/logger/hooks/useLogger';
import { usePushMessages } from 'modules/pushNotifications/hooks/usePushMessages';
import { pushesStoredKeys, usePushSettings } from 'modules/pushNotifications/hooks/usePushSettings';
import { PushTopics, PushTransactionData } from 'modules/pushNotifications/types';
import { navigate } from 'navigation';
import { AppScreenNames } from 'navigation/types';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { uuid } from 'utils/uuid';

const DebugPush = () => {
  const { getToken } = usePushSettings();
  const { log } = useLogger();
  const {
    message: transactionDetailsMessage,
    simulateMessage
  } = usePushMessages<PushTransactionData>(PushTopics.transaction_details);

  // useEffect(() => {
  //   getLogger().log('transactionDetails', transactionDetailsMessage);

  //   if (transactionDetailsMessage?.data?.id) {
  //     navigate(
  //       AppScreenNames.TabNavigation,
  //       {},
  //       navigate(
  //         AppScreenNames.TransactionsStack,
  //         {},
  //         navigate(
  //           AppScreenNames.TransactionsDetails,
  //           { id: transactionDetailsMessage.data.id }
  //         )));
  //   }

  // }, [transactionDetailsMessage]);

  return (
    <View>
      <Link onPress={async () => {
        const _fcmToken = await messaging().getToken();
        setItem(pushesStoredKeys.fcmToken, _fcmToken);

        getLogger().log('newToken', _fcmToken);
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
          notification: { body: 'SimBody1', title: 'SimTitled' },
          data: {
            id: '296',
            topic: PushTopics.transaction_details
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