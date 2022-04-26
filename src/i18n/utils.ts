import LanguageManager, { INITIAL_LANGUAGE } from 'services/LanguageManager';

export type TLang = 'en' | 'fi' | 'fr' | 'hi' | 'ml' | 'ar';
type TLangNames = 'english' | 'filipino' | 'french' | 'hindi' | 'malayalam' | 'arabic';
export const Languages: Record<TLang, TLangNames> = {
  en: 'english',
  fi: 'filipino',
  fr: 'french',
  hi: 'hindi',
  ml: 'malayalam',
  ar: 'arabic',
};
export const supportedLanguages: Partial<typeof Languages> = {
  en: 'english',
  ar: 'arabic'
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

export const getHeaderLanguage = () => {
  const localLanguage = getLanguage();
  return localLanguage === 'en' ? 'en_US' : 'de_CH';
};
