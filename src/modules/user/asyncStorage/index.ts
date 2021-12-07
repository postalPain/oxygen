import { getItem, setItem } from 'modules/asyncStorage';

enum userStoredKeys {
  firstLoginEmails = 'firstLoginEmails',
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