import { NativeModules } from 'react-native';
import { TLang } from 'i18n/utils';

const LanguageManager = {
  setLang: async (lang: TLang): Promise<TLang> => {
    return await NativeModules.RNLanguageManager.setLang(lang);
  },
  getLang: async (): Promise<TLang> => {
    return await NativeModules.RNLanguageManager.getLang();
  },
};
const { INITIAL_LANGUAGE, SUPPORTED_LANGUAGES: supportedLanguagesString } = NativeModules.RNLanguageManager.getConstants();
const SUPPORTED_LANGUAGES = JSON.parse(supportedLanguagesString);
export { INITIAL_LANGUAGE, SUPPORTED_LANGUAGES };
export default LanguageManager;
