import { usePushNotifications } from 'modules/pushNotifications/hooks/usePushNotifications';
import { useState } from 'react';

const TRANSACTION_DETAILS_TOPIC = 'transaction_details';

interface ITransactionDetailsPushData {
  topic: string;
  transaction_id: string;
}

const usePushTransactionDetails = () => {
  const transactionDetailsPush = usePushNotifications<ITransactionDetailsPushData>(TRANSACTION_DETAILS_TOPIC);

  return transactionDetailsPush;
};

export default usePushTransactionDetails;