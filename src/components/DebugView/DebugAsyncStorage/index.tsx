import Link from 'components/Link';
import { clearAsyncStorage } from 'modules/asyncStorage';
import useLogger from 'modules/logger/hooks/useLogger';
import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const DebugAsyncStorage = () => {
  const { log } = useLogger();

  return (
    <View>
      <Link onPress={() => AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
          stores.map((result, i, store) => {
            log({ [store[i][0]]: store[i][1] });
            return true;
          });
        });
      })}
      >
        Show AsyncStorage
      </Link>
      <Link onPress={async () => {
        await clearAsyncStorage();
        log('AsyncStorage Cleared');
      }}
      >
        Clear AsyncStorage
      </Link>

    </View>
  );
};

export default DebugAsyncStorage;