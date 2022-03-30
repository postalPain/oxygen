import moment from 'moment';
import { LoggerActions } from '../actions';

interface ILogMessage {
  time: string;
  message: string;
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
          { time: moment().format('HH:mm:ss'), message: action.message, },
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
