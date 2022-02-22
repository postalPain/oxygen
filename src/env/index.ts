import { Dimensions, Platform, Appearance, NativeModules } from 'react-native';
import { BUILD_ENV } from '../../build-env.js';

export enum Envs {
  DEV = 'DEV',
  STAGE = 'STAGE',
  PROD = 'PROD',
  E2E = 'E2E',
}

const baseUrls = {
  [Envs.DEV]: 'https://api-dev.stryproject-o.ch',
  [Envs.STAGE]: 'https://api-stage.stryproject-o.ch',
  [Envs.PROD]: 'https://api-prod.stryproject-o.ch',
};

const BASE_URL = baseUrls[BUILD_ENV] || baseUrls[Envs.DEV];

const env = {
  buildEnv: BUILD_ENV,
  dev: BUILD_ENV === Envs.DEV,
  e2e: BUILD_ENV === Envs.E2E,
  baseUrl: BASE_URL || baseUrls[Envs.DEV],
  apiUrl: `${BASE_URL}/api/v1`,
  websiteDomain: 'https://floos.ae',
  locale: Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier,
  os: Platform.OS,
  ios: Platform.OS === 'ios',
  android: Platform.OS === 'android',
  appStoreLink: '',
  playStoreLink: '',
  dimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    scale: Dimensions.get('window').scale,
    fontScale: Dimensions.get('window').fontScale,
  },
  appearance: Appearance.getColorScheme(),
};

export default env;
