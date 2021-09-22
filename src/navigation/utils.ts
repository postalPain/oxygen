import React from 'react';
import { NavigationContainerRef, } from '@react-navigation/native';

import { AppScreenNames } from 'navigation/types';

export const isMountedRef = React.createRef<boolean>();

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: AppScreenNames, params?: any) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
};
