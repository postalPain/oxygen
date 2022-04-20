import env from 'env';


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

export const getLanguage = (): TLang => {
  const systemLang = env.locale.split('_')[0];
  return supportedLanguages[systemLang]
    ? systemLang
    : defaultLang;
};

export const getLanguageName = (): TLangNames => {
  return Languages[getLanguage()];
};

export const getHeaderLanguage = () => {
  const localLanguage = getLanguage();
  return localLanguage === 'en' ? 'en_US' : 'de_CH';
};
