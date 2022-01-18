import { request, PERMISSIONS } from 'react-native-permissions';

export const requestFaceIdPermission = async () => {
  const result = await request(PERMISSIONS.IOS.FACE_ID);
  return result;
};