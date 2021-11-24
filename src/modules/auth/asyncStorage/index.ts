import { setItems } from 'modules/asyncStorage';
import { IAuthData } from '../types';

export const storeAuthData = async (data: IAuthData) => {
  const authData = Object.keys(data).map((key) => ({ key, value: data[key] }), []);
  await setItems(authData);
};