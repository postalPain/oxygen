import { PixelRatio } from 'react-native';
import env from 'env';

export const getSizeForLayout = PixelRatio.getPixelSizeForLayoutSize;

export const getFontSize = PixelRatio.getPixelSizeForLayoutSize;

export const HEADER_HEIGHT = 100;

export const SCREEN_PADDING = 16;

export const fontSize = (px: number) => {
  return px * env.dimensions.fontScale;
};
