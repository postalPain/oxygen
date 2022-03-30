export enum LoggerActions {
  LOG_MESSAGE = 'LOG_MESSAGE',
  CLEAR_LOG_MESSAGES = 'CLEAR_LOG_MESSAGES',
}

export const logMessage = (...messages) => ({
  type: LoggerActions.LOG_MESSAGE,
  message: messages.map(x => typeof x === 'object' ? JSON.stringify(x) : `${x}`).join(' ')
});

export const clearLogMessages = () => ({
  type: LoggerActions.CLEAR_LOG_MESSAGES,
});