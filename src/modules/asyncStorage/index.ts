import AsyncStorage from '@react-native-community/async-storage';

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};

export const setItems = async (items) => {
  await AsyncStorage.multiSet(items.map(({ key, value }) => [key, value]));
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
