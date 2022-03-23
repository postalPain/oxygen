import { getItem, getItemAsObject, getItemForUser, removeItem, setItem, setItemForUser, setObjectAsItem } from 'modules/asyncStorage';
import { deleteKeychainPassword, getKeychainCredentials, setKeychainPassword, TKeychainCredentials } from '../keychain';

export enum BiometricsStoredKeys {
  accepted = 'accepted',
  ttl = 'ttl'
}

export const storeBiometrics = async (email: string, accepted: boolean) => {
  await setItemForUser(email, BiometricsStoredKeys.accepted, accepted);
};

export const getBiometrics = async (email) => {
  const accepted = await getItemForUser(email, BiometricsStoredKeys.accepted);
  return accepted;
};

export const getBiometricTtl = async (): Promise<string> => {
  const ttl = await getItem(BiometricsStoredKeys.ttl);
  return ttl;
};

export const storeBiometricTtl = async (ttl: string): Promise<void> => {
  await setItem(BiometricsStoredKeys.ttl, ttl);
};

export const deleteBiometricTtl = async (): Promise<void> => {
  await removeItem(BiometricsStoredKeys.ttl);
};

export const storeBiometricData = async (email: string, refreshToken: string, refreshTtl: string) => {
  await setKeychainPassword(email, refreshToken);
  await storeBiometricTtl(refreshTtl);
};

export const getBiometricData = async () => {
  const ttl = await getBiometricTtl();
  const credentials = await getKeychainCredentials();

  return { ttl, credentials };
};

export const deleteBiometricData = async () => {
  await deleteKeychainPassword();
  await deleteBiometricTtl();
};
