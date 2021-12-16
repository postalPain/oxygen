import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DebugView = () => {
  return (
    <ScrollView>
      <Text>
        {`process: ${ JSON.stringify(process)}`}
      </Text>
    </ScrollView>
  );
};

export default DebugView;