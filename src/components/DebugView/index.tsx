import { Link } from 'components';
import React from 'react';
import { Text } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { getHeight, getWidth } from 'utils/window';
import DebugPush from './DebugPush';
import useLogger from 'modules/logger/hooks/useLogger';
import { clearAsyncStorage } from 'modules/asyncStorage';

const DebugView = () => {
  const { log, loggerMessages, clearLog } = useLogger();

  return (
    <ScrollView>
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
      <DebugPush />
      <Link onPress={clearLog}>
        Clear
      </Link>
      { loggerMessages.map(message => (
        <Text
          selectable
          style={{
            fontSize: getWidth(3),
            paddingVertical: getHeight(.5),
            ...(message.type === 'error' && { color: 'red' })
          }}
        >
          <Text>{message.time} </Text>
          <Text> {message.message}</Text>
        </Text>
      ))}

    </ScrollView>
  );
};

export default DebugView;