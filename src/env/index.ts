import { Dimensions, Platform, Appearance, NativeModules } from 'react-native';
import { BUILD_ENV } from '../../build-env.js';
import VersionNumber from 'react-native-version-number';


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

const ios = Platform.OS === 'ios';

const env = {
  bundleId: 'com.qstudio.floos',
  appleId: '1595567831',
  buildEnv: BUILD_ENV,
  dev: BUILD_ENV === Envs.DEV,
  e2e: BUILD_ENV === Envs.E2E,
  prod: BUILD_ENV === Envs.PROD,
  baseUrl: BASE_URL || baseUrls[Envs.DEV],
  apiUrl: `${BASE_URL}/api/v1`,
  websiteDomain: 'https://floos.ae',
  locale: ios
    ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier,
  os: Platform.OS,
  ios,
  android: !ios,
  appStoreLink: '',
  playStoreLink: '',
  dimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    scale: Dimensions.get('window').scale,
    fontScale: Dimensions.get('window').fontScale,
  },
  appearance: Appearance.getColorScheme(),
  version: VersionNumber.appVersion,
  buildVersion: VersionNumber.buildVersion,
  marketLink: ios
    ? 'itms-apps://itunes.apple.com/us/app/id1595567831?mt=8'
    : 'market://details?id=com.qstudio.floos'
};

export default env;
