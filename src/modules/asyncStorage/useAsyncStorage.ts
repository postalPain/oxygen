import { useState, useEffect } from 'react';
import * as storage from './index';

export const useAsyncStorage = (key: string, refreshOnRender?: boolean) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    storage.getItem(key).then(val => setValue(val));
  }, !refreshOnRender ? [] : undefined);
  useEffect(() => {
    storage.setItem(key, value);
  }, [value]);
  return [value, setValue];
};