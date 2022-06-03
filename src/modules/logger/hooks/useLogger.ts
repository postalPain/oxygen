import { useSelector } from 'react-redux';
import { getLogger } from 'modules/logger';
import { selectLoggerMessages } from '../selectors';
import { useEffect, useState } from 'react';

const useLogger = () => {
  const logger = getLogger();

  return logger;
};

export const useLoggerMessages = () => {
  const loggerMessages = useSelector(selectLoggerMessages);

  return loggerMessages;
};

export default useLogger;