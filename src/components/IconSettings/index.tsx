import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'config/theme';
import { windowDimensions } from 'utils/window';

const xml = (color: string) => `
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
    opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
    fill="${color}"
    />
    <path
    d="M15.7501 10.73V10C15.7501 9.07 15.7501 6.25 12.0001 6.25C8.25012 6.25 8.25012 9.07 8.25012 10V10.73C7.03012 11 6.62012 11.79 6.62012 13.5V14.5C6.62012 16.7 7.30012 17.38 9.50012 17.38H14.5001C16.7001 17.38 17.3801 16.7 17.3801 14.5V13.5C17.3801 11.79 16.9701 11 15.7501 10.73ZM12.0001 15.1C11.3901 15.1 10.9001 14.61 10.9001 14C10.9001 13.39 11.3901 12.9 12.0001 12.9C12.6101 12.9 13.1001 13.39 13.1001 14C13.1001 14.61 12.6101 15.1 12.0001 15.1ZM14.2501 10.62H9.75012V10C9.75012 8.54 10.1101 7.75 12.0001 7.75C13.8901 7.75 14.2501 8.54 14.2501 10V10.62Z"
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