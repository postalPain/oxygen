import store from 'modules/store';
import { clearLogMessages, logMessage } from './actions';
import { selectLoggerMessages } from './selectors';

export const getLogger = () => {
  const dispatch = store.dispatch;
  const loggerMessages = selectLoggerMessages(store.getState());

  return {
    log: (...messages) => dispatch(logMessage(...messages)),
    clearLog: () => dispatch(clearLogMessages()),
    loggerMessages,
  };
};