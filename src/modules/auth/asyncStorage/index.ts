import { getItem, removeItem, setItem } from 'modules/asyncStorage';

enum userStoredKeys {
  codeSentAt = 'codeSentAt',
}

export const addCodeSentAt = async (): Promise<number> => {
  const ts = Date.now();
  console.log('addCodeSentAt ts ==>>', ts);
  await setItem(userStoredKeys.codeSentAt, ts.toString());
  return ts;
};

export const getCodeSentAt = async (): Promise<number> => {
  const codeSentAt = await getItem(userStoredKeys.codeSentAt);
  console.log('getCodeSentAt ts ==>>', codeSentAt);
  return Number(codeSentAt) || null;
};

export const deleteCodeSentAt = async () => {
  console.log('deleteCodeSentAt');
  await removeItem(userStoredKeys.codeSentAt);
};
