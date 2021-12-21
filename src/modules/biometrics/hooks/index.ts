import { useState, useEffect } from 'react';
import { getKeychainCredentials, TKeychainCredentials } from '../keychain';

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
