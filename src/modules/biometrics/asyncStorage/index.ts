import { getItemAsObject, setObjectAsItem } from 'modules/asyncStorage';

export enum BiometricsStoredKeys {
  allowed = 'allowed'
}

export const getBiometricsAllowed = async (email): Promise<boolean> => {
  const biometricsAllowedObj = await getItemAsObject(BiometricsStoredKeys.allowed);

  return biometricsAllowedObj[email];
};

export const storeBiometricsAllowed = async (email: string, allowed: boolean) => {
  const biometricsAllowedObj = await getItemAsObject(BiometricsStoredKeys.allowed);

  biometricsAllowedObj[email] = allowed;

  await setObjectAsItem(BiometricsStoredKeys.allowed, biometricsAllowedObj);
};