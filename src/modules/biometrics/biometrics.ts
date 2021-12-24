import TouchID from 'react-native-touch-id';

export enum BiometricsTypes {
  TouchID = 'TouchID',
  FaceID = 'FaceID',
  Fingerprint = 'Fingerprint',
}

export const getBiometricsSupported = async (): Promise<BiometricsTypes | boolean> => {
  const optionalConfigObject = {
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false // if true is passed, it will allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
  };
  let biometricsSupported: any = false;
  try {
    biometricsSupported = await TouchID.isSupported(optionalConfigObject);
  } catch (error) {
    console.log('TouchID.isSupported error', error);
    return false;
  }
  return (biometricsSupported === true
    ? BiometricsTypes.Fingerprint
    : biometricsSupported
  );
};

export const biometricAuthenticate = () => TouchID.authenticate('Login');

