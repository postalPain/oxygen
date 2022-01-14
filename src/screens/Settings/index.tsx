import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';
import SettingsToggle from 'components/SettingsToggle';
import DashedDivider from 'components/DashedDivider/indext';
import { useBiometrics } from 'modules/biometrics/hooks';
import vocab from 'i18n';


const Settings = () => {
  const { biometricsType, biometricsAccepted, setBiometricsAccepted } = useBiometrics();

  return (
    <View style={styles.settings}>
      <SettingsToggle
        title={biometricsType}
        description={vocab.get().useBiometricsToLogIn(biometricsType)}
        on={biometricsAccepted}
        onChange={setBiometricsAccepted}
      />
      <DashedDivider />
    </View>
  );
};

const styles = StyleSheet.create({
  settings: {
    backgroundColor: theme.colors.screenBackgroundColorLight,
    flex: 1,
    paddingHorizontal: getWidth(7),
    paddingVertical: getHeight(7)
  },
});

export default Settings;