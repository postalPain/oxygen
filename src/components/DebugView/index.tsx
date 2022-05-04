import React from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import DebugAsyncStorage from './DebugAsyncStorage';
import DebugPush from './DebugPush';
import SettingsBiometrics from 'components/SettingsBiometrics';
import DebugLogs from './DebugLogs';

const DebugView = () => {
  return (
    <ScrollView>
      <DebugPush />
      <DebugAsyncStorage />
      <SettingsBiometrics />
      <DebugLogs />
    </ScrollView>
  );
};

export default DebugView;