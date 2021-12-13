import * as Keychain from 'react-native-keychain';

const settings = { service: 'com.qstudio.floos.cred' };

export const setKeychainPassword = (username, password) => {
  Keychain.setGenericPassword(username, password, settings);
};

export type TKeychainCredentials = false | Keychain.UserCredentials;

export const getKeychainCredentials = async (): Promise<TKeychainCredentials> => {
  try {
    const credentials = await Keychain.getGenericPassword(settings);
    return credentials;
  } catch (error) {
    return null;
  }
};

export const deleteKeychainPassword = async () => {
  await Keychain.resetGenericPassword(settings);
};
