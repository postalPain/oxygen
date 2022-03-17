import { getItem, getItemAsObject, removeItem, setItem, setObjectAsItem } from 'modules/asyncStorage';
import { deleteKeychainPassword, getKeychainCredentials, setKeychainPassword, TKeychainCredentials } from '../keychain';

export enum BiometricsStoredKeys {
  accepted = 'accepted',
  ttl = 'ttl'
}

export const getBiometricsAccepted = async (email): Promise<boolean> => {
  const biometricsAcceptedObj = await getItemAsObject(BiometricsStoredKeys.accepted);

  return biometricsAcceptedObj[email];
};

export const storeBiometricsAccepted = async (email: string, accepted: boolean) => {
  const biometricsAcceptedObj = await getItemAsObject(BiometricsStoredKeys.accepted);

  biometricsAcceptedObj[email] = accepted;

  await setObjectAsItem(BiometricsStoredKeys.accepted, biometricsAcceptedObj);
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
