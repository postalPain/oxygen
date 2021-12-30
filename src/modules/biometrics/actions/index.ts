import { IMeta } from 'modules/store/types';

export enum BiometricsActions {
  GET_BIOMETRICS_READY = 'GET_BIOMETRICS_READY',
  SET_BIOMETRICS_READY = 'SET_BIOMETRICS_READY',
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

export const getBiometricReady = () => ({
  type: BiometricsActions.GET_BIOMETRICS_READY,
});

export interface ISetBiometricsEnabledAction {
  type: BiometricsActions.SET_BIOMETRICS_READY;
  ready: boolean;
}

export const setBiometricsReady = (ready: boolean): ISetBiometricsEnabledAction => ({
  type: BiometricsActions.SET_BIOMETRICS_READY,
  ready,
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