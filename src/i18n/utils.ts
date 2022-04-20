import env from 'env';


export type TLang = 'en' | 'fi' | 'fr' | 'hi' | 'ml';
type TLangValues = 'english' | 'filipino' | 'french' | 'hindi' | 'malayalam';
export const Languages: Record<TLang, TLangValues> = {
  en: 'english',
  fi: 'filipino',
  fr: 'french',
  hi: 'hindi',
  ml: 'malayalam',
};
export const supportedLanguages: Partial<typeof Languages> = {
  en: 'english'
};
const defaultLangKey: TLang = 'en';

export const getLanguageKey = (): TLang => {
  const systemLangKey = env.locale.substring(0, 2);
  return supportedLanguages[systemLangKey]
    ? systemLangKey
    : defaultLangKey;
};

export const getLanguage = (): string => {
  return Languages[getLanguageKey()];
};

export const getHeaderLanguage = () => {
  const localLanguage = getLanguageKey();
  return localLanguage === 'en' ? 'en_US' : 'de_CH';
};
