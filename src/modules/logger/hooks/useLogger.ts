import { useDispatch, useSelector } from 'react-redux';
import { logMessage } from '../actions';
import { selectLoggerMessages } from '../selectors';

const useLogger = () => {
  const dispatch = useDispatch();
  const loggerMessages = useSelector(selectLoggerMessages);

  return {
    log: (...messages) => dispatch(logMessage(...messages)),
    loggerMessages,
  };
};

export default useLogger;