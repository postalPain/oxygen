import TouchID from 'react-native-touch-id';

export enum BiometryTypes {
  TouchID = 'TouchID',
  FaceID = 'FaceID',
  Fingerprint = 'Fingerprint',
}

export const getBiometricsSupported = async (): Promise<BiometryTypes> => {
  const optionalConfigObject = {
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false // if true is passed, it will allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
  };
  const biometricsSupported: any = await TouchID.isSupported(optionalConfigObject);
  return (biometricsSupported === true
    ? BiometryTypes.Fingerprint
    : biometricsSupported
  );
};

export const biometricAuthenticate = () => TouchID.authenticate('Login');

