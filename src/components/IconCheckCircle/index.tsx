import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'config/theme';

const xml = (backgroundColor?: string, checkmarkColor?: string) => `
<svg width="28" height="28" viewBox="0 0 28 28" fill="white" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="10" fill="${checkmarkColor || '#fff'}"/>
  <path fill="${backgroundColor || theme.colors.successMessageText}" d="M14 0.666992C6.65329 0.666992 0.666626 6.65366 0.666626 14.0003C0.666626 21.347 6.65329 27.3337 14 27.3337C21.3466 27.3337 27.3333 21.347 27.3333 14.0003C27.3333 6.65366 21.3466 0.666992 14 0.666992ZM20.3733 10.9337L12.8133 18.4937C12.6266 18.6803 12.3733 18.787 12.1066 18.787C11.84 18.787 11.5866 18.6803 11.4 18.4937L7.62663 14.7203C7.23996 14.3337 7.23996 13.6937 7.62663 13.307C8.01329 12.9203 8.65329 12.9203 9.03996 13.307L12.1066 16.3737L18.96 9.52033C19.3466 9.13366 19.9866 9.13366 20.3733 9.52033C20.76 9.90699 20.76 10.5337 20.3733 10.9337Z"/>
</svg>
`;

export default ({ backgroundColor, checkmarkColor }: {backgroundColor?: string; checkmarkColor?: string}) => {
  return (
    <SvgXml xml={xml(backgroundColor, checkmarkColor)} />
  );
};
