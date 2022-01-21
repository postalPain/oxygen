import { IMeta } from 'modules/store/types';
import { BiometryStatus } from '../biometrics';

export enum BiometryActions {
  GET_BIOMETRY_STATUS = 'GET_BIOMETRY_STATUS',
  SET_BIOMETRY_STATUS = 'SET_BIOMETRY_STATUS',
  GET_BIOMETRY_READY = 'GET_BIOMETRY_READY',
  SET_BIOMETRY_READY = 'SET_BIOMETRY_READY',
  SAVE_BIOMETRY = 'SAVE_BIOMETRY',
  BIOMETRIC_LOGIN = 'BIOMETRIC_LOGIN',
}

export const getBiometryStatus = (meta?: {onSuccess: (status: BiometryStatus) => void}) => ({
  type: BiometryActions.GET_BIOMETRY_STATUS,
  meta,
});

export interface SetBiometryStatus {
  type: BiometryActions.SET_BIOMETRY_STATUS;
  biometryStatus: BiometryStatus;
}

export const setBiometryStatus = (biometryStatus: BiometryStatus) => ({
  type: BiometryActions.SET_BIOMETRY_STATUS,
  biometryStatus,
});

export interface IBiometricLoginAction {
  type: BiometryActions.BIOMETRIC_LOGIN;
  email: string;
  meta?: IMeta;
}

export const biometricLogin = (email: string, meta?: IMeta): IBiometricLoginAction => ({
  type: BiometryActions.BIOMETRIC_LOGIN,
  email,
  meta,
});

export const getBiometryReady = () => ({
  type: BiometryActions.GET_BIOMETRY_READY,
});

export interface ISetBiometryEnabledAction {
  type: BiometryActions.SET_BIOMETRY_READY;
  ready: boolean;
}

export const setBiometryReady = (ready: boolean): ISetBiometryEnabledAction => ({
  type: BiometryActions.SET_BIOMETRY_READY,
  ready,
});

export interface ISaveBiometryAction {
  type: BiometryActions.SAVE_BIOMETRY;
  email: string;
}

export const saveBiometry = (email: string): ISaveBiometryAction => ({
  type: BiometryActions.SAVE_BIOMETRY,
  email,
});

export type BiometryAction = ISetBiometryEnabledAction | SetBiometryStatus;