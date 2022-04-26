import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import RNRestart from 'react-native-restart';

import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';
import { Languages, setLanguage, supportedLanguages } from 'i18n/utils';
import vocab from 'i18n';
import { SettingsItem } from 'components';
import DashedDivider from 'components/DashedDivider/indext';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';

const SettingsLanguage = (
  { navigation }: AppNavigationProps<AppScreenNames.SettingsLanguage>
) => {
  const [currentLang, setCurrentLang] = useState(vocab.getLanguage());
  const onChange = async (key) => {
    if (key !== currentLang) {
      Alert.alert(
        vocab.get().alertTitle,
        vocab.get().alertConfirmLanguageChange, [
          {
            text: vocab.get().alertReject,
            style: 'cancel',
          },
          {
            text: vocab.get().alertAccept,
            onPress: async () => {
              setCurrentLang(key);
              navigation.navigate(AppScreenNames.TabNavigation); // Hack fix for navigation in case of RNRestart.Restart()
              await setLanguage(key);
              RNRestart.Restart();
            }
          }
        ]);
    }
  };
  const langKeys = Object.keys(Languages).sort((a, b) => {
    if (a === currentLang) {
      return -1;
    }
    return 0;
  });

  return (
    <View style={styles.settings}>
      {
        langKeys.map((key, index) => (
          <>
            <SettingsItem
              key={key}
              type="radio"
              title={vocab.get()[`${key}Label`]}
              description={vocab.get()[`${key}Description`]}
              on={key === currentLang}
              onChange={() => onChange(key)}
              disabled={!supportedLanguages[key]}
            />
            { index < langKeys.length - 1 && <DashedDivider /> }
          </>
        ))
      }
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

export default SettingsLanguage;
