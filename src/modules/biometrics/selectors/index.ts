import { RootState } from 'modules/store/rootReducer';

export const selectBiometricsReady = (state: RootState) => state.biometrics.ready;