import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';
import { Languages, supportedLanguages } from 'i18n/utils';
import vocab from 'i18n';
import { SettingsItem } from 'components';
import DashedDivider from 'components/DashedDivider/indext';

const SettingsLanguage = () => {
  const [currentLang, setCurrentLang] = useState(vocab.getLanguage());
  const onChange = (key) => {
    if (key !== currentLang) {
      setCurrentLang(key);
      // TODO switch language
    }
  };
  const langKeys = Object.keys(Languages);

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
