import Link from 'components/Link';
import useLogger from 'modules/logger/hooks/useLogger';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getHeight, getWidth } from 'utils/window';


const DebugLogs = () => {
  const { log, loggerMessages, clearLog } = useLogger();

  return (
    <View>
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
          key={message.time}
        >
          <Text>{message.time} </Text>
          <Text> {message.message}</Text>
        </Text>
      ))}
    </View>
  );
};

export default DebugLogs;

const styles = StyleSheet.create({
  container: {}
});
