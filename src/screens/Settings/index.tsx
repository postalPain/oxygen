import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import SettingsBiometrics from 'components/SettingsBiometrics';
import SettingsPushNotifications from 'components/SettingsPushNotifications';

const Settings = (
  { navigation }: AppNavigationProps<AppScreenNames.Settings>
) => {
  return (
    <View style={styles.settings}>
      { /*
      <SettingsItem
        title={vocab.get().language}
        description={vocab.get().switchLanguage}
        onPress={() => navigation.navigate(AppScreenNames.SettingsLanguage)}
      />
      <DashedDivider />
      */}
      <SettingsBiometrics />
      <SettingsPushNotifications />
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
