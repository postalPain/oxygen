import useLogger from 'modules/logger/hooks/useLogger';
import { usePushNotifications } from 'modules/pushNotifications/hooks/usePushNotifications';
import { useState } from 'react';

const TRANSACTION_DETAILS_TOPIC = 'transaction_details';

interface ITransactionDetailsPushData {
  topic: string;
  transaction_id: string;
}

const usePushTransactionDetails = () => {
  const { log } = useLogger();
  const transactionDetailsPush = usePushNotifications<ITransactionDetailsPushData>(TRANSACTION_DETAILS_TOPIC);

  log('usePushTransactionDetails.transactionDetailsPush', transactionDetailsPush);
  return transactionDetailsPush;
};

export default usePushTransactionDetails;