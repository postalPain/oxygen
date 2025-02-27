import store from 'modules/store';
import { clearLogMessages, logError, logMessage } from './actions';
import { selectLoggerMessages } from './selectors';

export const getLogger = () => {
  const dispatch = store.dispatch;

  return {
    log: (...messages) => dispatch(logMessage(...messages)),
    error: (...messages) => dispatch(logError(...messages)),
    clearLog: () => dispatch(clearLogMessages()),
  };
};