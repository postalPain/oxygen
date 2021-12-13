import { RootState } from 'modules/store/rootReducer';

export const selectBiometricsEnabled = (state: RootState) => state.biometrics.enabled;