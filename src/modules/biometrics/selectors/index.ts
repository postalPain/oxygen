import { RootState } from 'modules/store/rootReducer';


export const selectBiometryStatus = (state: RootState) => state.biometrics.status;

export const selectBiometricsReady = (state: RootState) => state.biometrics.ready;