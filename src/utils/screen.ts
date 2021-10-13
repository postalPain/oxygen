import { PixelRatio } from 'react-native';
import env from 'env';

export const getSizeForLayout = PixelRatio.getPixelSizeForLayoutSize;

export const getFontSize = PixelRatio.getPixelSizeForLayoutSize;

export const HEADER_HEIGHT = getSizeForLayout(20);

export const SCREEN_PADDING = getSizeForLayout(8);

export const fontSize = (px: number) => {
  return px * env.dimensions.fontScale;
};
