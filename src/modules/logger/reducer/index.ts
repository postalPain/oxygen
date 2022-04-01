import moment from 'moment';
import { LoggerActions } from '../actions';

type TLogMessageType = 'error' | 'text';

interface ILogMessage {
  time: string;
  message: string;
  type?: TLogMessageType;
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
