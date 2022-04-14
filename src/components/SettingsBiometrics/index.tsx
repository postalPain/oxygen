import DashedDivider from 'components/DashedDivider/indext';
import SettingsToggle from 'components/SettingsToggle';
import vocab from 'i18n';
import { getBiometryStatus } from 'modules/biometrics/actions';
import { BiometryErrors } from 'modules/biometrics/biometrics';
import { useBiometrics } from 'modules/biometrics/hooks/useBiometrics';
import React from 'react';
import { Linking } from 'react-native';
import { useDispatch } from 'react-redux';

const SettingsBiometrics = () => {
  const dispatch = useDispatch();
  const {
    biometryStatus,
    biometricsReady,
    turnOnBiometrics,
    turnOffBiometrics,
  } = useBiometrics();

  return (
    biometryStatus.available || biometryStatus.error === BiometryErrors.PERMISSION_DENIED
      ? (
        <>
          <SettingsToggle
            title={biometryStatus.biometryType}
            description={vocab.t(vocab.get().useBiometricsToLogIn, biometryStatus.biometryType || 'Biometric ID')}
            on={biometricsReady}
            onChange={async (on) => {
              if (on) {
                dispatch(getBiometryStatus({
                  onSuccess: async (status) => {
                    if (status.available) {
                      turnOnBiometrics();
                    }
                    if (status.error === BiometryErrors.PERMISSION_DENIED) {
                      Linking.openSettings();
                    }
                  }
                }));
              } else {
                turnOffBiometrics();
              }
            }}
          />
          <DashedDivider />
        </>
      )
      : null
  );
};

export default SettingsBiometrics;
