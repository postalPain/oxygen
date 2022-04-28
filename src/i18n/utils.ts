import env from 'env';
import LanguageManager, { INITIAL_LANGUAGE } from 'services/LanguageManager';

export type TLang = 'en' | 'fi' | 'fr' | 'hi' | 'ml' | 'ar';
type TLangNames = 'english' | 'filipino' | 'french' | 'hindi' | 'malayalam' | 'arabic';
export const Languages: Record<TLang, TLangNames> = {
  ar: 'arabic',
  en: 'english',
  fi: 'filipino',
  fr: 'french',
  hi: 'hindi',
  ml: 'malayalam',
};
export const supportedLanguages: Partial<typeof Languages> = {
  en: 'english',
};
let lang: TLang = INITIAL_LANGUAGE;

export const setLanguage = async (l: TLang) => {
  await LanguageManager.setLang(l);
  lang = l;
};

export const getLanguage = (): TLang => {
  return lang;
};

export const getLanguageName = (): TLangNames => {
  return Languages[getLanguage()];
};

export enum SupportedLocales {
  en = 'en',
  ar = 'ar',
  fr = 'fr',
  hi_IN = 'hi_IN',
  ml_IN = 'ml_IN',
  fil_PH = 'fil_PH',
  ur_PK = 'ur_PK',
}

export const getSupportedLocale = () => {
  return SupportedLocales[env.locale] || SupportedLocales[env.locale.substring(0, 2)] || SupportedLocales.en;
};
