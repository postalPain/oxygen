import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';
import DashedDivider from 'components/DashedDivider/indext';
import SettingsBiometrics from 'components/SettgingsBiometrics';


const Settings = () => {

  return (
    <View style={styles.settings}>
      <SettingsBiometrics />
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