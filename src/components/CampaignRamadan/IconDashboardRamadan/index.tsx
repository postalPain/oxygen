import * as React from 'react';
import { SvgXml } from 'react-native-svg';

import { isRTL } from 'config/rtl';


const xml = (color: string) => `
  <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.4" d="M31.7136 23.7088C31.2776 23.1986 30.6403 22.9094 29.9862 22.9094H23.9823C21.0306 22.9094 18.6324 20.4772 18.6324 17.4838V11.3948C18.6324 10.7315 18.3473 10.0852 17.8441 9.64294C17.3578 9.20073 16.6869 8.99663 16.0497 9.08167C12.1085 9.59192 8.48601 11.786 6.12132 15.0856C3.73986 18.4022 2.86778 22.4502 3.62247 26.4982C4.71257 32.349 9.32455 37.0263 15.1105 38.1319C16.0329 38.319 16.9553 38.404 17.8777 38.404C20.9132 38.404 23.8481 37.4515 26.3469 35.5976C29.6005 33.1995 31.7639 29.5257 32.267 25.5287C32.3509 24.8654 32.1497 24.2021 31.7136 23.7088Z" fill="${color}"/>
  <path d="M28.1952 5.1196C28.5949 4.57765 29.4051 4.57765 29.8048 5.1196L31.7637 7.77582C31.884 7.93883 32.0508 8.06149 32.2423 8.12757L35.3589 9.20319C35.9858 9.41957 36.2323 10.1752 35.8535 10.7196L33.9453 13.4623C33.8314 13.6261 33.769 13.8202 33.7663 14.0197L33.7206 17.3626C33.7115 18.0321 33.0599 18.5036 32.4211 18.303L29.2996 17.3227C29.1046 17.2615 28.8954 17.2615 28.7004 17.3227L25.5789 18.303C24.9401 18.5036 24.2885 18.0321 24.2794 17.3626L24.2337 14.0197C24.231 13.8202 24.1686 13.6261 24.0547 13.4623L22.1465 10.7196C21.7677 10.1752 22.0142 9.41957 22.6411 9.20319L25.7577 8.12757C25.9492 8.06149 26.116 7.93883 26.2363 7.77582L28.1952 5.1196Z" fill="${color}"/>
  </svg>
`;

export default ({
  size = 40,
  color = '#CCCCCC',
}) => {
  const rotationAngle = isRTL ? '180deg' : '0deg';
  return (
    <SvgXml xml={xml(color)} width={size} height={size} style={{ transform: [{ rotateY: rotationAngle }] }} />
  );
};
