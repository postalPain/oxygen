import SettingsToggle from 'components/SettingsToggle';
import vocab from 'i18n';
import { usePushNotifications } from 'modules/pushNotifications/hooks/usePushNotifications';
import React from 'react';

const SettingsPushNotifications = () => {
  const {
    pushEnabled,
    turnOnPushes,
    turnOffPushes,
  } = usePushNotifications();

  return (
    <SettingsToggle
      title={vocab.get().notifications}
      description={vocab.get().turnOnNotifications}
      on={pushEnabled}
      onChange={async (on) => {
        on ? turnOnPushes() : turnOffPushes();
      }}
    />
  );
};

export default SettingsPushNotifications;