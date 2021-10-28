import AsyncStorage from '@react-native-community/async-storage';

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};

export const setItems = (items) => {
  return Promise.all(items.map(({ key, value }) => setItem(key, value)));
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

export const removeItem = async (key) => {
  AsyncStorage.removeItem(key);
};

export const removeItems = (items) => {
  return Promise.all(items.map(key => removeItem(key)));
};
