import { PixelRatio } from 'react-native';

export const getSizeForLayout = PixelRatio.getPixelSizeForLayoutSize;

export const getFontSize = PixelRatio.getPixelSizeForLayoutSize;

export const HEADER_HEIGHT = getSizeForLayout(20);

export const SCREEN_PADDING = getSizeForLayout(8);
