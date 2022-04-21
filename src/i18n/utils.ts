import env from 'env';
import { setItem } from 'modules/asyncStorage';

export type TLang = 'en' | 'fi' | 'fr' | 'hi' | 'ml';
type TLangNames = 'english' | 'filipino' | 'french' | 'hindi' | 'malayalam';
export const Languages: Record<TLang, TLangNames> = {
  en: 'english',
  fi: 'filipino',
  fr: 'french',
  hi: 'hindi',
  ml: 'malayalam',
};
export const supportedLanguages: Partial<typeof Languages> = {
  en: 'english'
};
const defaultLang: TLang = 'en';
export const languageAsyncStoreKey = 'languageAsyncStoreKey';
let lang = defaultLang;

export const setLanguage = async (l: TLang) => {
  const systemLang = env.locale.split('_')[0];
  const preferredLang = l || systemLang;
  const finalLang = supportedLanguages[preferredLang]
    ? preferredLang
    : defaultLang;
  lang = finalLang;
  await setItem(languageAsyncStoreKey, finalLang);
};

export const getLanguage = (): TLang => {
  return lang;
};

export const getLanguageName = (): TLangNames => {
  return Languages[getLanguage()];
};

export const getHeaderLanguage = () => {
  const localLanguage = getLanguage();
  return localLanguage === 'en' ? 'en_US' : 'de_CH';
};
