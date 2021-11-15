import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { windowDimensions } from 'utils/window';

const xml = () => `
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20.5" cy="20.5" r="20.5" fill="#7D59B4"/>
<path d="M8.96603 21.5045L15.439 30.8792C16.0948 31.8312 17.0381 32.3687 18.0435 32.3687C18.0779 32.3687 18.1145 32.3687 18.15 32.3675C19.1942 32.328 20.1419 31.7127 20.7523 30.6806L32.1057 11.4494C32.6173 10.5822 32.3598 9.44215 31.5298 8.90695C30.6997 8.37175 29.6111 8.64109 29.0995 9.50948L18.0068 28.2891L11.8313 19.3428C11.2598 18.5162 10.1567 18.3293 9.36553 18.9271C8.5743 19.525 8.39453 20.6779 8.96603 21.5045Z" fill="white"/>
</svg>

`;

export default ({
  size = 0.08 * windowDimensions.width,
}) => {
  return (
    <SvgXml xml={xml()} width={size} height={size} />
  );
};