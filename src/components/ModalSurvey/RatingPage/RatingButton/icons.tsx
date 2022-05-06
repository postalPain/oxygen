import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'config/theme';

const rating1 = (checked: boolean) => `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="18.5" fill="${checked ? theme.colors.primary : 'transparent'}" stroke="${theme.colors.primary}" stroke-width="3"/>
  <circle r="1.5" transform="matrix(-1 0 0 1 13 14.9141)" stroke="${checked ? 'white' : theme.colors.primary}" stroke-width="3"/>
  <circle r="1.5" transform="matrix(-1 0 0 1 25.4824 14.9141)" stroke="${checked ? 'white' : theme.colors.primary}" stroke-width="3"/>
  <path d="M10.5652 30.5627C10.3236 31.3552 10.7703 32.1933 11.5627 32.4348C12.3552 32.6764 13.1933 32.2297 13.4348 31.4373L10.5652 30.5627ZM26.7019 31.7517C27.117 32.4686 28.0347 32.7132 28.7517 32.2981C29.4686 31.883 29.7132 30.9653 29.2981 30.2483L26.7019 31.7517ZM13.4348 31.4373C13.5864 30.9399 14.1707 29.9318 15.2769 29.0457C16.3449 28.1901 17.8371 27.5 19.7714 27.5V24.5C17.0733 24.5 14.9338 25.4766 13.4012 26.7043C11.9067 27.9016 10.9215 29.3934 10.5652 30.5627L13.4348 31.4373ZM19.7714 27.5C23.6004 27.5 25.8359 30.2561 26.7019 31.7517L29.2981 30.2483C28.2339 28.4105 25.2073 24.5 19.7714 24.5V27.5Z" 
  fill="${checked ? 'white' : theme.colors.primary}"/>
</svg>
`;

const rating2 = (checked: boolean) => `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
  <circle cx="20" cy="20" r="18.5" fill="${checked ? theme.colors.primary : 'transparent'}" stroke="#6F62AB" stroke-width="3"/>
  <circle r="2.5" transform="matrix(-1 0 0 1 13 16)" stroke="${checked ? 'white' : theme.colors.primary}" fill="${checked ? 'white' : theme.colors.primary}"/>
  <circle r="2.5" transform="matrix(-1 0 0 1 25.4824 16)" stroke="${checked ? 'white' : theme.colors.primary}" fill="${checked ? 'white' : theme.colors.primary}"/>
  <path d="M12 29C12.5079 28.3333 15.139 27 19.7714 27C24.4038 27 27.0349 28.3333 28 29" stroke="${checked ? 'white' : theme.colors.primary}" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

const rating3 = (checked: boolean) => `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
  <circle cx="20" cy="20" r="18.5" fill="${checked ? theme.colors.floos2 : 'transparent'}" stroke="${theme.colors.floos2}" stroke-width="3"/>
  <circle r="1.5" transform="matrix(-1 0 0 1 14 14.9141)" fill="white" stroke="${checked ? 'white' : theme.colors.floos2}" stroke-width="3"/>
  <circle r="1.5" transform="matrix(-1 0 0 1 26.4824 14.9141)" fill="white" stroke="${checked ? 'white' : theme.colors.floos2}" stroke-width="3"/>
  <path d="M13.334 29H26.5255" stroke="${checked ? 'white' : theme.colors.floos2}" stroke-width="3" stroke-linecap="round"/>
</svg>
`;

const rating4 = (checked: boolean) => `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.7">
  <circle cx="20" cy="20" r="18.5" fill="${checked ? theme.colors.floos2 : 'transparent'}" stroke="${theme.colors.floos2}" stroke-width="3"/>
  <circle r="1.5" transform="matrix(-1 0 0 1 14 14.9141)" fill="white" stroke="${checked ? 'white' : theme.colors.floos2}" stroke-width="3"/>
  <circle r="1.5" transform="matrix(-1 0 0 1 26.4824 14.9141)" fill="white" stroke="${checked ? 'white' : theme.colors.floos2}" stroke-width="3"/>
  <path d="M28 28C27.4921 28.6667 24.861 30 20.2286 30C15.5962 30 12.9651 28.6667 12 28" stroke="${checked ? 'white' : theme.colors.floos2}" stroke-width="3" stroke-linecap="round"/>
</svg>
`;

const rating5 = (checked: boolean) => `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="18.5" fill="${checked ? theme.colors.floos2 : 'transparent'}" stroke="${theme.colors.floos2}" stroke-width="3"/>
  <circle r="1.5" transform="matrix(-1 0 0 1 14 14.9141)" fill="white" stroke="${checked ? 'white' : theme.colors.floos2}" stroke-width="3"/>
  <circle r="1.5" transform="matrix(-1 0 0 1 26.4824 14.9141)" fill="white" stroke="${checked ? 'white' : theme.colors.floos2}" stroke-width="3"/>
  <path d="M28 27C27.4921 28.3333 24.861 31 20.2286 31C15.5962 31 12.9651 28.3333 12 27" stroke="${checked ? 'white' : theme.colors.floos2}" stroke-width="3" stroke-linecap="round"/>
</svg>
`;

const getIconXml = (checked: boolean, value: string) => {
  switch (value) {
    case '1':
      return rating1(checked);
    case '2':
      return rating2(checked);
    case '3':
      return rating3(checked);
    case '4':
      return rating4(checked);
    case '5':
      return rating5(checked);
    default:
      return rating1(checked);
  }
};

export const RatingIcon = ({ checked, value }: {checked: boolean; value: string}) => {
  return (
    <SvgXml xml={getIconXml(checked, value)} />
  );
};
