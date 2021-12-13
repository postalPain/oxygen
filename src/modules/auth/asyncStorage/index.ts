import { setItems } from 'modules/asyncStorage';
import { IAuthData } from '../types';
import { getItem, removeItem, setItem } from 'modules/asyncStorage';

export enum AuthStoredKeys {
  codeSentAt = 'codeSentAt',
  access_token = 'access_token',
  access_ttl = 'access_ttl',
  refresh_token = 'refresh_token',
  refresh_ttl = 'refresh_ttl',
  email = 'email',
}

export const addCodeSentAt = async (ts = Date.now()): Promise<number> => {
  await setItem(AuthStoredKeys.codeSentAt, ts.toString());
  return ts;
};

export const getCodeSentAt = async (): Promise<number> => {
  const codeSentAt = await getItem(AuthStoredKeys.codeSentAt);
  return Number(codeSentAt) || null;
};

export const deleteCodeSentAt = async () => {
  await removeItem(AuthStoredKeys.codeSentAt);
};

export const storeAuthData = async (data: IAuthData) => {
  const authData = Object.keys(data).map((key) => ({ key, value: data[key] }), []);
  await setItems(authData);
};