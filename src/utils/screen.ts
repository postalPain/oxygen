import { PixelRatio } from 'react-native';
import env from 'env';
import { getHeight, getWidth } from './window';

export const getSizeForLayout = PixelRatio.getPixelSizeForLayoutSize;

export const getFontSize = PixelRatio.getPixelSizeForLayoutSize;

export const NAVIGATION_HEADER_HEIGHT = getHeight(6);

export const SCREEN_HORIZONTAL_PADDING = getWidth(8);

export const SCREEN_BOTTOM_PADDING = getHeight(10);

export const fontSize = (px: number) => {
  return px * env.dimensions.fontScale;
};
