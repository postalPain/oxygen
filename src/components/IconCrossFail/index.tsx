import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'config/theme';
import { getWidth } from 'utils/window';

const xml = () => `
  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.5" cy="20.5" r="20.5" fill="#CD5676"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9095 21.0003L28.6786 15.2311L29.8684 14.0414C30.0439 13.8659 30.0439 13.5807 29.8684 13.4052L28.5954 12.1322C28.4199 11.9567 28.1347 11.9567 27.9592 12.1322L21.0003 19.0911L14.0414 12.1316C13.8659 11.9561 13.5807 11.9561 13.4052 12.1316L12.1316 13.4046C11.9561 13.5801 11.9561 13.8653 12.1316 14.0408L19.0911 21.0003L12.1316 27.9592C11.9561 28.1347 11.9561 28.4199 12.1316 28.5954L13.4046 29.8684C13.5801 30.0439 13.8653 30.0439 14.0408 29.8684L21.0003 22.9095L26.7695 28.6786L27.9592 29.8684C28.1347 30.0439 28.4199 30.0439 28.5954 29.8684L29.8684 28.5954C30.0439 28.4199 30.0439 28.1347 29.8684 27.9592L22.9095 21.0003Z" fill="white"/>
  </svg>
`;

export default ({
  size = getWidth(10),
}) => {
  return (
    <SvgXml xml={xml()} width={size} height={size} />
  );
};