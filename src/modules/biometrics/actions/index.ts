import { IMeta } from 'modules/store/types';

export enum BiometricsActions {
  GET_BIOMETRICS_ENABLED = 'GET_BIOMETRICS_ENABLED',
  SET_BIOMETRICS_ENABLED = 'SET_BIOMETRICS_ENABLED',
  SAVE_BIOMETRICS = 'SAVE_BIOMETRICS',
  BIOMETRIC_LOGIN = 'BIOMETRIC_LOGIN',
}

export interface IBiometricLoginAction {
  type: BiometricsActions.BIOMETRIC_LOGIN;
  email: string;
  meta?: IMeta;
}

export const biometricLogin = (email: string, meta?: IMeta): IBiometricLoginAction => ({
  type: BiometricsActions.BIOMETRIC_LOGIN,
  email,
  meta,
});

export const getBiometricEnabled = () => ({
  type: BiometricsActions.GET_BIOMETRICS_ENABLED,
});

export interface ISetBiometricsEnabledAction {
  type: BiometricsActions.SET_BIOMETRICS_ENABLED;
  enabled: boolean;
}

export const setBiometricsEnabled = (enabled: boolean): ISetBiometricsEnabledAction => ({
  type: BiometricsActions.SET_BIOMETRICS_ENABLED,
  enabled,
});

export interface ISaveBiometricsAction {
  type: BiometricsActions.SAVE_BIOMETRICS;
  email: string;
}

export const saveBiometrics = (email: string): ISaveBiometricsAction => ({
  type: BiometricsActions.SAVE_BIOMETRICS,
  email,
});

export type BiometricAction = ISetBiometricsEnabledAction;