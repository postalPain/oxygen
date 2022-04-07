import AsyncStorage from '@react-native-community/async-storage';
import { getLogger } from 'modules/logger';

export const setItem = async (key: string, value: string) => {
  value ?? removeItem(key);
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};

export const setObjectAsItem = async (key, obj) => {
  const json = JSON.stringify(obj);

  await setItem(key, json);
};

export const setItems = async (items) => {
  await AsyncStorage.multiSet(items.map(({ key, value }) => [key, value ?? '']));
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    // Error retrieving data
    return error;
  }
};

export const getItemAsObject = async (key) => {
  const json = await getItem(key);

  return JSON.parse(json) || {};
};

export const getItems = async (keys: string[]) => {
  try {
    const value = await AsyncStorage.multiGet(keys);
    return value.reduce((acc, v) => ({ ...acc, [v[0]]: v[1], }), {});
  } catch (error) {
    // Error retrieving data
    return error;
  }
};

export const removeItem = async (key) => {
  AsyncStorage.removeItem(key);
};

export const removeItems = (items) => {
  return Promise.all(items.map(key => removeItem(key)));
};

export const getAllKeys = async () => {
  try {
    const value = await AsyncStorage.getAllKeys();
    return value;
  } catch (error) {
    return error;
  }
};

export const getItemForUser = async (email, key) => {
  const item = await getItem(`${email },${ key}`);
  return JSON.parse(item);
};

export const setItemForUser = async (email, key, value) => {
  await setItem(`${email },${key}`, JSON.stringify(value));
};

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    getLogger().error('clearAsyncStorage', e);
  }
};