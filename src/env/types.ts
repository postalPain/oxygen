import { ColorSchemeName, PlatformOSType } from 'react-native';

export enum Envs {
  DEV = 'DEV',
  STAGE = 'STAGE',
  PROD = 'PROD',
  E2E = 'E2E',
}

export interface IEnv {
  bundleId: string;
  appleId: string;
  buildEnv: Envs;
  dev: boolean;
  e2e: boolean;
  prod: boolean;
  baseUrl: string;
  apiUrl: string;
  websiteDomain: string;
  locale: string;
  os: PlatformOSType;
  ios: boolean;
  android: boolean;
  dimensions: {
    width: number;
    height: number;
    scale: number;
    fontScale: number;
  };
  appearance: ColorSchemeName;
  version: string;
  buildVersion: string;
  marketLink: string;
}