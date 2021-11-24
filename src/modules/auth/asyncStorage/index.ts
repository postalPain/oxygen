import { getItem, removeItem, setItem } from 'modules/asyncStorage';

enum userStoredKeys {
  codeSentAt = 'codeSentAt',
}

export const addCodeSentAt = async (ts = Date.now()): Promise<number> => {
  await setItem(userStoredKeys.codeSentAt, ts.toString());
  return ts;
};

export const getCodeSentAt = async (): Promise<number> => {
  const codeSentAt = await getItem(userStoredKeys.codeSentAt);
  return Number(codeSentAt) || null;
};

export const deleteCodeSentAt = async () => {
  await removeItem(userStoredKeys.codeSentAt);
};
