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
    case LoggerActions.LOG: {
      const time = state.messages;
      return {
        messages: [
          ...state.messages, {
            time: moment().format('HH:mm:ss'),
            message: action.message,
          }
        ]
      };
    }
    default:
      return state;
  }
}
