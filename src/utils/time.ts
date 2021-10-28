import moment from 'moment';


export const getCurrentTimestamp = (): number => {
  return parseInt(moment().format('X'));
};
