import { useDispatch, useSelector } from 'react-redux';
import { clearLogMessages, logMessage } from '../actions';
import { selectLoggerMessages } from '../selectors';

const useLogger = () => {
  const dispatch = useDispatch();
  const loggerMessages = useSelector(selectLoggerMessages);

  return {
    log: (...messages) => dispatch(logMessage(...messages)),
    clearLog: () => dispatch(clearLogMessages()),
    loggerMessages,
  };
};

export default useLogger;