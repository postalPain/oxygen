import { useDatabase } from 'modules/fbDatabase/useDatabase';
import { selectTransactionCount } from 'modules/transactions/selectors';
import { useSelector } from 'react-redux';
import { askForReview } from '../utils';

const DB_PATH = '/app_review/ask_after_transaction';

const useAskForReview = () => {
  const transactionCount = useSelector(selectTransactionCount);

  const { fetchDbValue } = useDatabase<number>(DB_PATH);

  return async () => {
    const askAfterTransaction = await fetchDbValue();

    // Ask after 4th, 8th or 12th transaction, for example
    const shouldAsk = [
      askAfterTransaction,
      2 * askAfterTransaction,
      3 * askAfterTransaction
    ].includes(transactionCount);

    shouldAsk && askForReview();
  };
};

export default useAskForReview;