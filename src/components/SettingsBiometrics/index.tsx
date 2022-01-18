import SettingsToggle from 'components/SettingsToggle';
import vocab from 'i18n';
import { useBiometrics } from 'modules/biometrics/hooks';
import React, { useState } from 'react';

const SettingsBiometrics = () => {
  const {
    biometricsType,
    biometricsReady,
    requestBiometrics,
    setBiometricsAccepted,
  } = useBiometrics();

  return (
    <SettingsToggle
      title={biometricsType}
      description={vocab.get().useBiometricsToLogIn(biometricsType)}
      on={biometricsReady}
      onChange={(on) => on ? requestBiometrics() : setBiometricsAccepted(false)}
    />
  );
};

export default SettingsBiometrics;