import env from 'env';
import { NativeModules, Platform, } from 'react-native';

export enum Languages {
  en = 'english',
  fi = 'filipino',
  fr = 'french',
  hi = 'hindi',
  ml = 'malayalam',
}

export const getLanguage = (): string => {
  const defaultLanguage = Languages.en;
  const supportedLanguages = [Languages.en, ];

  const systemLanguage = Languages[env.locale.substring(0, 2)];

  return supportedLanguages.includes(systemLanguage)
    ? systemLanguage
    : defaultLanguage;
};

export const getHeaderLanguage = () => {
  const localLanguage = getLanguage();
  return localLanguage === 'en' ? 'en_US' : 'de_CH';
};
