import { Link } from 'components';
import React from 'react';
import { Text } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { getHeight, getWidth } from 'utils/window';
import useLogger from 'modules/logger/hooks/useLogger';
import { DbKeys, useDatabase } from 'modules/fbDatabase/useDatabase';
import DebugAsyncStorage from './DebugAsyncStorage';
import DebugPush from './DebugPush';
import SettingsBiometrics from 'components/SettingsBiometrics';

const DebugView = () => {
  const { log, loggerMessages, clearLog } = useLogger();

  return (
    <ScrollView>
      <DebugPush />
      <DebugAsyncStorage />
      <SettingsBiometrics />
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