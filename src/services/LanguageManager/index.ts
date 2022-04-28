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
const { INITIAL_LANGUAGE } = NativeModules.RNLanguageManager.getConstants();
export { INITIAL_LANGUAGE };
export default LanguageManager;
