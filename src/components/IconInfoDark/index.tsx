import theme from 'config/theme';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { windowDimensions } from 'utils/window';

const xml = (color: string) => `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="${color}"/>
  <path opacity="0.6" d="M12 10.25C11.59 10.25 11.25 10.59 11.25 11L11.25 16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16L12.75 11C12.75 10.59 12.41 10.25 12 10.25Z" fill="white"/>
  <path opacity="0.6" d="M11.08 8.38012C11.13 8.50012 11.2 8.61012 11.29 8.71012C11.39 8.80012 11.5 8.87012 11.62 8.92012C11.86 9.02012 12.14 9.02012 12.38 8.92012C12.5 8.87012 12.61 8.80012 12.71 8.71012C12.8 8.61012 12.87 8.50012 12.92 8.38012C12.97 8.26012 13 8.13012 13 8.00012C13 7.87012 12.97 7.74012 12.92 7.62012C12.87 7.49012 12.8 7.39012 12.71 7.29012C12.61 7.20012 12.5 7.13012 12.38 7.08012C12.26 7.03012 12.13 7.00012 12 7.00012C11.87 7.00012 11.74 7.03012 11.62 7.08012C11.5 7.13012 11.39 7.20012 11.29 7.29012C11.2 7.39012 11.13 7.49012 11.08 7.62012C11.03 7.74012 11 7.87012 11 8.00012C11 8.13012 11.03 8.26012 11.08 8.38012Z" fill="white"/>
</svg>
`;

const IconInfoDark = ({
  size = 0.06 * windowDimensions.width,
  color = theme.colors.floos1,
}) => {
  return (
    <SvgXml xml={xml(color)} width={size} height={size} />
  );
};

export default IconInfoDark;