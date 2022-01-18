import TouchID from 'react-native-touch-id';
import ReactNativeBiometrics, { BiometryType } from 'react-native-biometrics';
import env from 'env';

export const biometricAuthenticate = () => TouchID.authenticate('Login');


enum BiometricAndroidErrors {
  BIOMETRIC_ERROR_NONE_ENROLLED = 'BIOMETRIC_ERROR_NONE_ENROLLED'
}

export enum BiometryErrors {
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  NOT_ENROLLED = 'NOT_ENROLLED',
  OTHER = 'OTHER'
}

export interface BiometryStatus {
  available: boolean;
  biometryType: BiometryType;
  error: BiometryErrors;
}

export const getDeviceBiometryStatus = async () => {
  const result = await ReactNativeBiometrics.isSensorAvailable();
  let error: BiometryErrors;

  if (env.ios && result?.error?.includes('No identities are enrolled')) {
    error = BiometryErrors.NOT_ENROLLED;
  }
  if (env.android && result?.error === BiometricAndroidErrors.BIOMETRIC_ERROR_NONE_ENROLLED) {
    error = BiometryErrors.NOT_ENROLLED;
  }
  if (env.ios && result?.error?.includes('User has denied the use of biometry for this app')) {
    error = BiometryErrors.PERMISSION_DENIED;
  }

  if (!result.available && !error) {
    error = BiometryErrors.OTHER;
  }

  const status: BiometryStatus = {
    available: result.available,
    biometryType: result.biometryType,
    error,
  };

  return status;
};
