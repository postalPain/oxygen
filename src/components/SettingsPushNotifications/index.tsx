import SettingsItem from 'components/SettingsItem';
import vocab from 'i18n';
import { usePushSettings } from 'modules/pushNotifications/hooks/usePushSettings';
import React from 'react';

const SettingsPushNotifications = () => {
  const {
    pushEnabled,
    togglePushes,
  } = usePushSettings();

  return (
    <SettingsItem
      type="toggle"
      title={vocab.get().notifications}
      description={vocab.get().turnOnNotifications}
      on={pushEnabled}
      onChange={togglePushes}
    />
  );
};

export default SettingsPushNotifications;
