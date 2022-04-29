import { getItem, getItemAsObject, getItemForUser, removeItem, setItem, setItemForUser, setObjectAsItem } from 'modules/asyncStorage';
import { deleteKeychainPassword, getKeychainCredentials, setKeychainPassword, TKeychainCredentials } from '../keychain';

export enum BiometricsStoredKeys {
  biometrics_accepted = 'biometrics_accepted',
  refresh_ttl = 'refresh_ttl'
}

export const storeBiometrics = async (accepted: boolean) => {
  accepted
    ? await setItem(BiometricsStoredKeys.biometrics_accepted, 'true')
    : await removeItem(BiometricsStoredKeys.biometrics_accepted);
};

// TODO: I wanted to rename keys, but didn't want current users to lost their settings. Remove it somewhere in 2023
export const getBiometrics83 = async (email) => {
  const accepted = await getItemForUser(email, 'accepted');
  return accepted;
};

export const getBiometrics = async () => {
  const accepted = await getItem(BiometricsStoredKeys.biometrics_accepted);
  return accepted;
};

// TODO: I wanted to rename keys, but didn't want current users to lost their settings. Remove it somewhere in 2023
export const getBiometricTtl83 = async (): Promise<string> => {
  const ttl = await getItem('ttl');
  return ttl;
};

export const getBiometricTtl = async (): Promise<string> => {
  const ttl = await getItem(BiometricsStoredKeys.refresh_ttl);
  return ttl;
};

export const storeBiometricTtl = async (ttl: string): Promise<void> => {
  await setItem(BiometricsStoredKeys.refresh_ttl, ttl);
};

export const deleteBiometricTtl = async (): Promise<void> => {
  await removeItem(BiometricsStoredKeys.refresh_ttl);
};

export const storeBiometricData = async (email: string, refreshToken: string, refreshTtl: string) => {
  await setKeychainPassword(email, refreshToken);
  await storeBiometricTtl(refreshTtl);
};

export const deleteBiometricData = async () => {
  await deleteKeychainPassword();
  await deleteBiometricTtl();
};
