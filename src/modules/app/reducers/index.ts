import { AppStateStatus } from 'react-native';
import { AppActions, TAppAction } from '../types';

interface IAppState {
  appState: AppStateStatus;
}

export const appDefaultState: IAppState = {
  appState: 'active'
};

const appReducer = (
  state = appDefaultState,
  action: TAppAction,
): IAppState => {
  switch (action.type) {
    case AppActions.SET_APP_STATE: {
      return {
        ...state,
        appState: action.appState
      };
    }
    default:
      return state;
  }
};

export default appReducer;
