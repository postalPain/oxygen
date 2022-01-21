import { getItem, getItemAsObject, setItem, setObjectAsItem } from 'modules/asyncStorage';

enum userStoredKeys {
  firstLoginEmails = 'firstLoginEmails',
  loginCounter = 'loginCounter'
}

export const getStoredFirstLoginEmails = async (): Promise<string> => {
  const emails = await getItem(userStoredKeys.firstLoginEmails);

  return emails || '';
};

export const addToStoredLoginEmails = async (email: string): Promise<string> => {
  const storedEmails = await getStoredFirstLoginEmails();

  const newEmails = `${storedEmails}${email},`;

  await setItem(userStoredKeys.firstLoginEmails, newEmails);

  return newEmails;
};

export const deleteFromStoredLoginEmails = async (email: string): Promise<void> => {
  const storedEmails = await getStoredFirstLoginEmails();

  const newEmail = storedEmails.replace(`${email},`, '');

  await setItem(userStoredKeys.firstLoginEmails, newEmail);
};

export const existsInStoredLoginEmails = async (email: string): Promise<boolean> => {
  if (!email) {
    return false;
  }
  const storedEmails = await getStoredFirstLoginEmails();

  return storedEmails.includes(email);
};

export const getLoginCount = async (email: string): Promise<number> => {
  const loginCounter = await getItemAsObject(userStoredKeys.loginCounter);

  return loginCounter[email];
};

export const setLoginCount = async (email: string, count: number)=> {
  const loginCounter = await getItemAsObject(userStoredKeys.loginCounter);

  loginCounter[email] = count;
  await setObjectAsItem(userStoredKeys.loginCounter, loginCounter);
};

export const incrementLoginCount = async (email: string) => {
  const loginCounter = await getItemAsObject(userStoredKeys.loginCounter);

  loginCounter[email] = (loginCounter[email] || 0) + 1;

  await setObjectAsItem(userStoredKeys.loginCounter, loginCounter);
};