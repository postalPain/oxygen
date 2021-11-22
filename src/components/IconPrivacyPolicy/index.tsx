import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'config/theme';
import { getWidth } from 'utils/window';

const xml = (color: string) => `
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  <path
    opacity="0.4"
    d="M20.4098 6.96043V9.80043L7.39984 19.3404L4.76984 17.3704C4.11984 16.8804 3.58984 15.8304 3.58984 15.0204V6.96043C3.58984 5.84043 4.44984 4.60043 5.49984 4.21043L10.9698 2.16043C11.5398 1.95043 12.4598 1.95043 13.0298 2.16043L18.4998 4.21043C19.5498 4.60043 20.4098 5.84043 20.4098 6.96043Z"
    fill="${color}"
    />
  <path
    d="M20.4098 11.1699V15.0199C20.4098 15.8299 19.8798 16.8799 19.2298 17.3699L13.7598 21.4599C13.2798 21.8199 12.6398 21.9999 11.9998 21.9999C11.3598 21.9999 10.7198 21.8199 10.2398 21.4599L8.31982 20.0299L20.4098 11.1699Z"
    fill="${color}"
    />
  </svg>
`;

export default ({
  size = getWidth(5),
  color = theme.colors.floos1,
}) => {
  return (
    <SvgXml xml={xml(color)} width={size} height={size} />
  );
};