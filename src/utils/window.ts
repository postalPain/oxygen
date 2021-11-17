import env from 'env';
import { Dimensions } from 'react-native';

export const windowDimensions = Dimensions.get('window');

export const getWidth = (percent = 100) => env.dimensions.width * percent / 100;

export const getHeight = (percent = 100) => env.dimensions.height * percent / 100;
