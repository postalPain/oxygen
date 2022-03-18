import { Link } from 'components';
import React from 'react';
import { Text } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { getWidth } from 'utils/window';
import DebugPush from './DebugPush';
import useLogger from 'modules/logger/hooks/useLogger';

const DebugView = () => {
  const { log, loggerMessages } = useLogger();
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
      <DebugPush />
      { loggerMessages.reverse().map(message => (
        <Text selectable style={{ fontSize: getWidth(3) }} >
          <Text>{message.time} </Text>
          <Text> {message.message}</Text>
        </Text>
      ))}

    </ScrollView>
  );
};

export default DebugView;