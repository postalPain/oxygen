import { PixelRatio } from 'react-native';
import env from 'env';

export const getSizeForLayout = PixelRatio.getPixelSizeForLayoutSize;

export const getFontSize = PixelRatio.getPixelSizeForLayoutSize;

export const NAVIGATION_HEADER_HEIGHT = 80;

export const SCREEN_PADDING = 32;

export const fontSize = (px: number) => {
  return px * env.dimensions.fontScale;
};
