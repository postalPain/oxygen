import { NativeModules } from 'react-native';

const LanguageManager = {
  setLang: async (lang: String): Promise<String> => {
    return await NativeModules.RNLanguageManager.setLang(lang);
  },
  getLang: async (): Promise<String> => {
    return await NativeModules.RNLanguageManager.getLang();
  },
  appReload: () => {
    NativeModules.RNLanguageManager.appReload();
  },
};

export default LanguageManager;
