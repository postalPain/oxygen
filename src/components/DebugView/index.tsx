import React, { useEffect } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import DebugAsyncStorage from './DebugAsyncStorage';
import DebugPush from './DebugPush';
import SettingsBiometrics from 'components/SettingsBiometrics';
import DebugLogs from './DebugLogs';
import useAskForReview from 'modules/askForReview/hooks/useAskForReview';
import Link from 'components/Link';
import crashlytics from '@react-native-firebase/crashlytics';


const DebugView = () => {
  const askForReview = useAskForReview();

  return (
    <ScrollView>
      <Link onPress={() => {
        crashlytics().crash();
      }}
      >Crash
      </Link>
      <DebugPush />
      <DebugAsyncStorage />
      <SettingsBiometrics />
      <DebugLogs />
      <Link onPress={askForReview}>AskForReview</Link>
    </ScrollView>
  );
};

export default DebugView;