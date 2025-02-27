import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'config/theme';

import { isRTL } from 'config/rtl';

const xml = (color: string) => `
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.3364 19.8424L10.6521 19.5254C10.8613 19.3153 10.8613 18.9747 10.6521 18.7646L2.6836 10.7621H19.4643C19.7601 10.7621 20 10.5213 20 10.2241V9.77582C20 9.47871 19.7601 9.23782 19.4643 9.23782H2.6836L10.6521 1.2354C10.8613 1.02531 10.8613 0.684667 10.6521 0.474535L10.3364 0.157566C10.1272 -0.0525219 9.78802 -0.0525219 9.57883 0.157566L0.156897 9.61957C-0.0522992 9.82966 -0.0522992 10.1703 0.156897 10.3804L9.57883 19.8424C9.78802 20.0525 10.1272 20.0525 10.3364 19.8424Z"
      fill="${color}"
    />
  </svg>
`;

export default ({
  size = 20,
  color = theme.colors.floos1,
}) => {
  const rotationAngle = isRTL ? '180deg' : '0deg';
  return (
    <SvgXml xml={xml(color)} width={size} height={size} style={{ transform: [{ rotateY: rotationAngle }] }} />
  );
}
