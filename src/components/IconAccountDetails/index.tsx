import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'config/theme';
import { windowDimensions } from 'utils/window';

const xml = (color: string) => `
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 10.5C12.9162 10.5 14.875 8.54125 14.875 6.125C14.875 3.70875 12.9162 1.75 10.5 1.75C8.08375 1.75 6.125 3.70875 6.125 6.125C6.125 8.54125 8.08375 10.5 10.5 10.5Z"
      fill="${color}"
    />
    <path
      d="M10.5001 12.6875C6.11639 12.6875 2.54639 15.6275 2.54639 19.25C2.54639 19.495 2.73889 19.6875 2.98389 19.6875H18.0164C18.2614 19.6875 18.4539 19.495 18.4539 19.25C18.4539 15.6275 14.8839 12.6875 10.5001 12.6875Z"
      fill="${color}"
    />
  </svg>
`;

export default ({
  size = 0.05 * windowDimensions.width,
  color = theme.colors.floos1,
}) => {
  return (
    <SvgXml xml={xml(color)} width={size} height={size} />
  );
};