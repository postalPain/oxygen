import env from 'env';
import { request, PERMISSIONS } from 'react-native-permissions';

export const requestBiometricPermission = async () => {
  if (env.ios) {
    const result = await request(PERMISSIONS.IOS.FACE_ID);
    return result === 'granted';
  }

  return true;
};