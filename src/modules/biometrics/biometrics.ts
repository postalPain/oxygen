import TouchID from 'react-native-touch-id';

export const biometryTypes = {
  TOUCH_ID: 'TouchID',
  FACE_ID: 'FaceID',
  FINGERPRINT: 'Fingerprint'
};

// export enum fingerprintScannerBiometryTypes {
//   TOUCH_ID = 'Touch ID',
//   FACE_ID = 'Face ID',
//   BIOMETRICS = 'Biometrics', // for Android devices
// }

// export const biometricsErrors = {
//   LAErrorUserCancel: 'LAErrorUserCancel',
// };

// export interface IBiometricsError {
//   name: string;
//   message: string;
//   details: any;
// }

export const getBiometricsSupported = () => {
  const optionalConfigObject = {
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false // if true is passed, it will allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
  };
  return TouchID.isSupported(optionalConfigObject);
};

export const biometricAuthenticate = () => TouchID.authenticate('Login');

