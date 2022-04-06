import { useDispatch, useSelector } from 'react-redux';
import { getLogger } from '..';
import { clearLogMessages, logMessage } from '../actions';
import { selectLoggerMessages } from '../selectors';

const useLogger = () => {
  const logger = getLogger();
  return logger;
};

export default useLogger;