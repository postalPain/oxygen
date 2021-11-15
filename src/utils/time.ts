import moment from 'moment';

export const getUTCOffset = () => moment().utcOffset();

export const getCurrentTimestamp = (): number => {
  return parseInt(moment().format('X'));
};
