import { RootState } from 'modules/store/rootReducer';

export const selectAppState = (state: RootState) => state.app.appState;