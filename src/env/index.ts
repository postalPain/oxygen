import { Dimensions, Platform, Appearance } from 'react-native';
import { BASE_URL } from 'config/apiUrls';


const env = {
  baseUrl: BASE_URL,
  apiUrl: `${BASE_URL}/api/v1`,
  locale: 'en',
  os: Platform.OS,
  ios: Platform.OS === 'ios',
  android: Platform.OS === 'android',
  sentry_dsn: '',
  appStoreLink: '',
  playStoreLink: '',
  dimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  appearance: Appearance.getColorScheme(),
};

export default env;
