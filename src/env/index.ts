import { Dimensions, Platform, Appearance } from 'react-native';
import { BASE_URL } from 'config/apiUrls';


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
