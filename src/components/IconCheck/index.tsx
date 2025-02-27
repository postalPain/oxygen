import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'config/theme';

const xml = (color: string) => `
  <svg
    width="14"
    height="11"
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.233 1.0961L4.57638 8.75276L1.86949 6.04587C1.74136 5.91773 1.5336 5.91773 1.40544 6.04587L1.0961 6.35521C0.967967 6.48334 0.967967 6.6911 1.0961 6.81926L4.34437 10.0675C4.47251 10.1957 4.68026 10.1957 4.80842 10.0675L13.0064 1.86952C13.1346 1.74138 13.1346 1.53363 13.0064 1.40547L12.6971 1.0961C12.5689 0.967967 12.3612 0.967967 12.233 1.0961Z"
      fill="${color}"
      stroke="${color}"
    />
  </svg>
`;

export default ({
  size = 14,
  color = theme.colors.passwordRequirementLabelTextMatched,
}) => {
  return (
    <SvgXml xml={xml(color)} width={size} height={size} />
  );
};