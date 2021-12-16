import { Dimensions, Platform, Appearance } from 'react-native';
import { BUILD_ENV } from '../../build-env.js';

export enum Envs {
  DEV = 'DEV',
  STAGE = 'STAGE',
  PROD = 'PROD',
}

const baseUrls = {
  [Envs.DEV]: 'https://api-dev.stryproject-o.ch',
  [Envs.STAGE]: 'https://api-stage.stryproject-o.ch',
  [Envs.PROD]: 'https://api-prod.stryproject-o.ch',
};

const BASE_URL = baseUrls[BUILD_ENV || Envs.DEV];

const env = {
  baseUrl: BASE_URL,
  apiUrl: `${BASE_URL}/api/v1`,
  websiteDomain: 'https://www.floos.ae',
  locale: 'en',
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
