import { usePushNotifications } from 'modules/pushNotifications/hooks/usePushNotifications';
import { useState } from 'react';

const TRANSACTION_DETAILS_TOPIC = 'transaction_details';

interface ITransactionDetailsPushData {
  topic: string;
  transaction_id: string;
}

const usePushTransactionDetails = () => {
  const [message, setMessage] = useState<ITransactionDetailsPushData>(null);

  const {} = usePushNotifications<ITransactionDetailsPushData>();

  return message;
};

export default usePushTransactionDetails;