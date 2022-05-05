import { AppStateStatus } from 'react-native';
import { AppActions, ISetAppStateAction } from '../types';

export const appInit = () => ({
  type: AppActions.APP_INIT
});

export const setAppState = (appState: AppStateStatus): ISetAppStateAction => ({
  type: AppActions.SET_APP_STATE,
  appState
});