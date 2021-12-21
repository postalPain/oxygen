import { getItem, getItemAsObject, setItem, setObjectAsItem } from 'modules/asyncStorage';
import { getKeychainCredentials, setKeychainPassword, TKeychainCredentials } from '../keychain';

export enum BiometricsStoredKeys {
  use = 'use',
  ttl = 'ttl'
}

export const getBiometricsPermission = async (email): Promise<boolean> => {
  const biometricsAllowedObj = await getItemAsObject(BiometricsStoredKeys.use);

  return biometricsAllowedObj[email];
};

export const storeBiometricsPermission = async (email: string, allowed: boolean) => {
  const biometricsAllowedObj = await getItemAsObject(BiometricsStoredKeys.use);

  biometricsAllowedObj[email] = allowed;

  await setObjectAsItem(BiometricsStoredKeys.use, biometricsAllowedObj);
};

export const getBiometricTtl = async (): Promise<string> => {
  const ttl = await getItem(BiometricsStoredKeys.ttl);
  return ttl;
};

export const storeBiometricTtl = async (ttl: string): Promise<void> => {
  await setItem(BiometricsStoredKeys.ttl, ttl);
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