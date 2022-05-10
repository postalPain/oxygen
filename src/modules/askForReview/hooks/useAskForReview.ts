import { getItem, setItem } from 'modules/asyncStorage';
import { useDatabase } from 'modules/fbDatabase/useDatabase';
import { getLogger } from 'modules/logger';
import useLogger from 'modules/logger/hooks/useLogger';
import { selectTransactionCount } from 'modules/transactions/selectors';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { askForReview } from '../utils';

const DB_PATH = '/app_review/ask_after_transaction';

const ASKED_FOR_REVIEW_KEY = 'asked_for_review';

const useAskForReview = () => {
  const transactionCount = useSelector(selectTransactionCount);
  const logger = useLogger();

  const { value: askAfterTransaction } = useDatabase<number>(DB_PATH);

  const [askedForReview, setAskedForReview] = useState(null);

  useEffect(() => {
    (async () => setAskedForReview(await getItem(ASKED_FOR_REVIEW_KEY)))();
  }, []);

  logger.log('askedForReview', askedForReview);
  logger.log('askAfterTransaction', askAfterTransaction);
  logger.log('transactionCount', transactionCount);

  // Ask after 4th, 8th or 12th transaction, for example
  const shouldAsk = (
    !askedForReview
    && [askAfterTransaction, 2 * askAfterTransaction, 5 * askAfterTransaction].includes(transactionCount)
  );

  return () => {
    shouldAsk && askForReview(() => setItem(ASKED_FOR_REVIEW_KEY, 'true'));
  };
};

export default useAskForReview;