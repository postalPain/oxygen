import moment from 'moment';

export const getUTCOffset = () => moment().utcOffset();

export const getCurrentTimestamp = (): number => {
  return parseInt(moment().format('X'));
};

export const isTtlActive = (ttl: string) => {
  const ttl_ts = Number(moment.parseZone(ttl).add(getUTCOffset(), 'm').format('x'));
  const now_ts = Number(Date.now());
  return (ttl_ts + 5000) > now_ts;
};