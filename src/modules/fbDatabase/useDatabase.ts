import { useEffect, useState } from 'react';
import { firebase } from '@react-native-firebase/database';

export enum DbKeys {
  minSupportedBuild = '/force_update/build_no',
};

export const useDatabase = <T>(key?: DbKeys) => {
  const [dbValue, setDbValue] = useState<T>(null);

  useEffect(() => {
    fetchDbValue(key);
  }, []);

  const fetchDbValue = async<T2 = T> (_key?: DbKeys) => {
    const ref = firebase
      .app()
      .database('https://floos-e4dc6-default-rtdb.europe-west1.firebasedatabase.app/')
      .ref(_key);

    const value = (await ref.once('value')).val();
    setDbValue(value);
    return value as T2;
  };

  return {
    dbValue,
    fetchDbValue,
  };
};