import { getItem, setItem } from 'modules/asyncStorage';
import { useDatabase } from 'modules/fbDatabase/useDatabase';
import { selectTransactionCount } from 'modules/transactions/selectors';
import { useSelector } from 'react-redux';
import { askForReview } from '../utils';

const DB_PATH = '/app_review/ask_after_transaction';

const ASKED_FOR_REVIEW_KEY = 'asked_for_review';

const useAskForReview = () => {
  const transactionCount = useSelector(selectTransactionCount);

  const { fetchDbValue } = useDatabase<number>(DB_PATH);

  return async () => {
    const askedForReview = await getItem(ASKED_FOR_REVIEW_KEY);
    if (askedForReview) {
      return;
    }

    const askAfterTransaction = await fetchDbValue();

    // Ask after 4th, 8th or 12+ transaction, for example
    const shouldAsk = [askAfterTransaction, 2 * askAfterTransaction].includes(transactionCount)
      || transactionCount > askAfterTransaction * 3;

    shouldAsk && askForReview(() => setItem(ASKED_FOR_REVIEW_KEY, 'true'));
  };
};

export default useAskForReview;