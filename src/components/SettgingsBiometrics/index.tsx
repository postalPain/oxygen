import SettingsToggle from 'components/SettingsToggle';
import vocab from 'i18n';
import { useBiometrics } from 'modules/biometrics/hooks';
import React from 'react';

const SettingsBiometrics = () => {
  const { biometricsType, biometricsAccepted, setBiometricsAccepted } = useBiometrics();

  return (
    <SettingsToggle
      title={biometricsType}
      description={vocab.get().useBiometricsToLogIn(biometricsType)}
      on={biometricsAccepted}
      onChange={setBiometricsAccepted}
    />
  );
};

export default SettingsBiometrics;