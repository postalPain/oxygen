import { RootState } from 'modules/store/rootReducer';

export const selectBiometricsPermitted = (state: RootState) => state.biometrics.permitted;