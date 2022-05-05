import { AppStateStatus } from 'react-native';

export const enum AppActions {
  SET_APP_STATE = 'SET_APP_STATE',
  APP_INIT = 'APP_INIT',
}

export interface ISetAppStateAction {
  type: AppActions.SET_APP_STATE;
  appState: AppStateStatus;
}

export type TAppAction = ISetAppStateAction;
