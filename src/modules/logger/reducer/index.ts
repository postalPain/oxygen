import moment from 'moment';
import { uuid } from 'utils/uuid';
import { LoggerActions } from '../actions';

type TLogMessageType = 'error' | 'text';

interface ILogMessage {
  time: string;
  message: string;
  type?: TLogMessageType;
  id: string;
}

interface ILoggerState {
  messages: ILogMessage[];
}

const defaultState: ILoggerState = {
  messages: []
};

// This logger created for debugging on real device
export default function loggerReducer(state = defaultState, action): ILoggerState {
  switch (action.type) {
    case LoggerActions.LOG_MESSAGE: {
      return {
        ...state,
        messages: [
          {
            time: moment().format('HH:mm:ss'),
            message: action.message,
            type: 'text',
            id: uuid()
          },
          ...state.messages
        ]
      };
    }
    case LoggerActions.LOG_ERROR: {
      return {
        ...state,
        messages: [
          {
            time: moment().format('HH:mm:ss'),
            message: action.message,
            type: 'error',
            id: uuid()
          },
          ...state.messages
        ]
      };
    }
    case LoggerActions.CLEAR_LOG_MESSAGES: {
      return {
        ...state,
        messages: []
      };
    }
    default:
      return state;
  }
}
