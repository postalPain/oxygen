import env from 'env';
import { request, PERMISSIONS } from 'react-native-permissions';
import { getDeviceBiometryStatus } from '../biometrics';

export const requestBiometricPermission = async () => {
  if (env.ios) {
    const biometryStatus = await getDeviceBiometryStatus();
    if (biometryStatus.biometryType === 'TouchID') {
      return true;
    }
    const result = await request(PERMISSIONS.IOS.FACE_ID);
    return result === 'granted';
  }

  return true;
};