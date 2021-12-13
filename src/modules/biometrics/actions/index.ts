export enum BiometricsActions {
  GET_BIOMETRICS_ENABLED = 'GET_BIOMETRICS_ENABLED',
  SET_BIOMETRICS_ENABLED = 'SET_BIOMETRICS_ENABLED',
  BIOMETRIC_LOGIN = 'BIOMETRIC_LOGIN',
}

export interface IBiometricLoginAction {
  type: BiometricsActions.BIOMETRIC_LOGIN;
  email: string;
}

export const biometricLogin = (email: string): IBiometricLoginAction => ({
  type: BiometricsActions.BIOMETRIC_LOGIN,
  email,
});

export interface IGetBiometricEnabledAction {
  type: BiometricsActions.GET_BIOMETRICS_ENABLED;
  email: string;
}

export const getBiometricEnabled = (email): IGetBiometricEnabledAction => ({
  type: BiometricsActions.GET_BIOMETRICS_ENABLED,
  email
});

export interface ISetBiometricEnabledAction {
  type: BiometricsActions.SET_BIOMETRICS_ENABLED;
  enabled: boolean;
}

export const setBiometricEnabled = (enabled: boolean): ISetBiometricEnabledAction => ({
  type: BiometricsActions.SET_BIOMETRICS_ENABLED,
  enabled,
});

export type BiometricAction = IGetBiometricEnabledAction | ISetBiometricEnabledAction;