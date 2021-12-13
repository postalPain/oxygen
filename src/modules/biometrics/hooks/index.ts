import { useState, useEffect } from 'react';
import { biometryTypes, getBiometricsSupported } from '../biometrics';
import { getKeychainCredentials, TKeychainCredentials } from '../keychain';

export const useBiometricsSupported = () => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    getBiometricsSupported()
      .then((biometricsSupported: any) => {
        console.log('biometricsSupported then', biometricsSupported);

        setValue(
          biometricsSupported === true
            ? biometryTypes.FINGERPRINT
            : biometricsSupported
        );
      })
      .catch((error) => {
        console.log('biometricsSupported catch', error);

        setValue(null);
      });
  });
  return value;
};

export const useKeychainCredentials = (refreshOnRender = false) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    getKeychainCredentials()
      .then((credentials: TKeychainCredentials) => {
        setValue(credentials);
      })
      .catch((error) => {
        setValue(null);
      });
  }, !refreshOnRender ? [] : undefined);
  return value;
};
