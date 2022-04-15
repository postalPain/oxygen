import { useSelector } from 'react-redux';
import { getLogger } from 'modules/logger';
import { selectLoggerMessages } from '../selectors';

const useLogger = () => {
  const logger = getLogger();
  const loggerMessages = useSelector(selectLoggerMessages);

  return {
    ...logger,
    loggerMessages,
  };
};

export default useLogger;