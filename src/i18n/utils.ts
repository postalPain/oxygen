import LanguageManager, { INITIAL_LANGUAGE, SUPPORTED_LANGUAGES } from 'services/LanguageManager';

export type TLang = 'en' | 'fil' | 'fr' | 'hi' | 'ml' | 'ar' | 'ur';
export type TLangMessage = Partial<Record<TLang, string>>;
type TLangNames = 'english' | 'filipino' | 'french' | 'hindi' | 'malayalam' | 'arabic' | 'urdu';
export const Languages: Record<TLang, TLangNames> = {
  ar: 'arabic',
  en: 'english',
  fil: 'filipino',
  fr: 'french',
  hi: 'hindi',
  ml: 'malayalam',
  ur: 'urdu',
};
export const supportedLanguages: Partial<typeof Languages> = SUPPORTED_LANGUAGES.reduce((obj, lang) => ({
  ...obj,
  [lang]: Languages[lang],
}), {});
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
