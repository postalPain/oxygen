import { RootState } from 'modules/store/rootReducer';

export const selectLoggerMessages = (state: RootState) => state.logger.messages;