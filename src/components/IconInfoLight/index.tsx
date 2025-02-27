import theme from 'config/theme';
import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { windowDimensions } from 'utils/window';

const xml = (color: string) => `
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3Z" fill=${color}/>
    <path d="M18 15.375C17.385 15.375 16.875 15.885 16.875 16.5L16.875 24C16.875 24.615 17.385 25.125 18 25.125C18.615 25.125 19.125 24.615 19.125 24L19.125 16.5C19.125 15.885 18.615 15.375 18 15.375Z" fill="#7D59B4"/>
    <path d="M16.62 12.5697C16.695 12.7497 16.8 12.9147 16.935 13.0647C17.085 13.1997 17.25 13.3047 17.43 13.3797C17.79 13.5297 18.21 13.5297 18.57 13.3797C18.75 13.3047 18.915 13.1997 19.065 13.0647C19.2 12.9147 19.305 12.7497 19.38 12.5697C19.455 12.3897 19.5 12.1947 19.5 11.9997C19.5 11.8047 19.455 11.6097 19.38 11.4297C19.305 11.2347 19.2 11.0847 19.065 10.9347C18.915 10.7997 18.75 10.6947 18.57 10.6197C18.39 10.5447 18.195 10.4997 18 10.4997C17.805 10.4997 17.61 10.5447 17.43 10.6197C17.25 10.6947 17.085 10.7997 16.935 10.9347C16.8 11.0847 16.695 11.2347 16.62 11.4297C16.545 11.6097 16.5 11.8047 16.5 11.9997C16.5 12.1947 16.545 12.3897 16.62 12.5697Z" fill="#7D59B4"/>
  </svg>
`;

const IconInfoLight = ({
  size = 0.1 * windowDimensions.width,
  color = theme.colors.screenBackgroundColorLight,
}) => {
  return (
    <SvgXml xml={xml(color)} width={size} height={size} />
  );
};

export default IconInfoLight;