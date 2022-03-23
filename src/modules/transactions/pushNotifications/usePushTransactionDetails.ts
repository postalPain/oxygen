// import useLogger from 'modules/logger/hooks/useLogger';
// import { usePushSettings } from 'modules/pushNotifications/hooks/usePushNotifications';
// import { useEffect, useState } from 'react';

// const TRANSACTION_DETAILS_TOPIC = 'transaction_details';

// interface ITransactionDetailsPushData {
//   topic: string;
//   transaction_id: string;
// }

// const usePushTransactionDetails = () => {
//   const { log } = useLogger();
//   const [push, setPush] = useState({});
//   const transactionDetailsPush = usePushSettings(TRANSACTION_DETAILS_TOPIC);

//   useEffect(() => {
//     setPush(transactionDetailsPush);
//   }, [transactionDetailsPush]);

//   // log('usePushTransactionDetails.transactionDetailsPush', transactionDetailsPush);
//   return push;
// };

// export default usePushTransactionDetails;