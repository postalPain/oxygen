export enum LoggerActions {
  LOG = 'LOG',
}

export const logMessage = (...messages) => ({
  type: LoggerActions.LOG,
  message: messages.map(x => `${x}`).join(' ')
});