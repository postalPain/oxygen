import { NativeModules, Platform, } from 'react-native';


export const getLanguage = (): string => {
  const defaultLanguage = 'en';
  const supportedLanguages = ['en',];
  let systemLanguage;
  if (Platform.OS === 'android') {
    systemLanguage = NativeModules.I18nManager.localeIdentifier;
  } else {
    systemLanguage = NativeModules.SettingsManager.settings.AppleLocale;
    if (systemLanguage === undefined) {
      // iOS 13 workaround, take first of AppleLanguages array  ["en", "en-NZ"]
      [systemLanguage] = NativeModules.SettingsManager.settings.AppleLanguages;
    }
  }

  if (!systemLanguage) {
    systemLanguage = defaultLanguage;
  }
  return supportedLanguages.includes(systemLanguage.substring(0, 2))
    ? systemLanguage.substring(0, 2)
    : defaultLanguage;
};

export const getHeaderLanguage = () => {
  const localLanguage = getLanguage();
  return localLanguage === 'en' ? 'en_US' : 'de_CH';
};
