import { useEffect, useState } from 'react';
import { firebase } from '@react-native-firebase/database';

export const useDatabase = <T>(key?: string) => {
  const [value, setValue] = useState<T>(null);

  useEffect(() => {
    fetchDbValue(key);
  }, []);

  const fetchDbValue = async<T2 = T> (_key?: string) => {
    const ref = firebase
      .app()
      .database('https://floos-e4dc6-default-rtdb.europe-west1.firebasedatabase.app/')
      .ref(_key);

    const _value = (await ref.once('value')).val();
    setValue(_value);
    return _value as T2;
  };

  return {
    value,
    fetchDbValue,
  };
};