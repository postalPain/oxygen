import vocabulary from 'i18n';
import {
  TransactionStatusesBE,
  TransactionStatusesFE,
} from 'modules/transactions/types';
import moment from 'moment';
import { getUTCOffset } from 'utils/time';

const vocab = vocabulary.get();

export const getTransactionStatus = (beStatus: TransactionStatusesBE): TransactionStatusesFE => {
  let status;
  switch (beStatus) {
    case TransactionStatusesBE.pending:
    case TransactionStatusesBE.processing:
      status = vocab[TransactionStatusesFE.pending];
      break;
    case TransactionStatusesBE.declined:
    case TransactionStatusesBE.error:
      status = vocab[TransactionStatusesFE.failed];
      break;
    default:
      status = vocab[TransactionStatusesFE.completed];
      break;
  }
  return status;
};

export const getTransactionDate = (dateBE: string) => {
  return moment.parseZone(dateBE).add(getUTCOffset(), 'm').format('DD.MM.YYYY');
};

export const getTransactionDetailsDate = (dateBE: string) => {
  const localDate = moment
    .parseZone(dateBE)
    .add(getUTCOffset(), 'm');
  const date = localDate.format('ddd, D MMM, YYYY');
  const time = localDate.format('HH:mm');
  return `${date} at ${time}`;
};
