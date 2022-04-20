import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { getHeight, getWidth } from 'utils/window';
import { isRTL } from 'config/rtl';

const xml = (color: string) => `
  <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path
      d="M2 21L10.5 11.5L2 2"
      stroke="${color}"
      stroke-width="2"
      stroke-miterlimit="16"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;

export default ({
  width = getWidth(3.5),
  height = getHeight(6.7),
  color = '#7b7b7b',
}) => {
  const rotationAngle = isRTL ? '180deg' : '0deg';
  return (
    <SvgXml
      xml={xml(color)}
      width={width}
      height={height}
      style={{ transform: [{ rotateY: rotationAngle }] }}
    />
  );
};
