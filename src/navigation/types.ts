import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/core';

export enum AppScreenNames {
  Loading = 'Loading',
  Onboarding = 'Onboarding',
  SignIn = 'SignIn',
  EnterRegistrationId = 'EnterRegistrationId',
  EnterEmail = 'EnterEmail',
  SetPassword = 'SetPassword',
  DataPrivacy = 'DataPrivacy',
  VerificationCode = 'VerificationCode',
  ResetPassword = 'ResetPassword',
  UserVerification = 'UserVerification',
  UserVerificationPending = 'UserVerificationPending',
  ForgotPassword = 'ForgotPassword',
  Dashboard = 'Dashboard',
}

export enum IUserAccess {
  unauthenticated = 'unauthenticated',
  new = 'new',
  pending = 'pending',
  active = 'active',
}

export interface IScreenPermission {
  default?: boolean; // default screen to fallback to in case user doesn't have access
  redirectTo?: string; // redirect recommendation; "default" will be used, if user doesn't have permissions for this route
  access: IUserAccess[];
}

export interface IScreenPermissionsTable {
  [key: string]: IScreenPermission;
}

export enum MainScreenNames {
  HomeStack = 'HomeStack',
  Transactions = 'Transactions',
}

export enum HomeScreenNames {
  Home = 'Home',
  InputEarlyWage = 'InputEarlyWage',
}

export type AppStackParameters = {
  Loading: undefined;
  Onboarding: undefined;
  SignIn: undefined;
  EnterRegistrationId: { backendError: string };
  EnterEmail: { backendError: string };
  SetPassword: { backendError: string };
  DataPrivacy: undefined;
  VerificationCode: undefined;
  UserVerification: undefined;
  UserVerificationPending: undefined;
  PasswordReset: undefined;
  ForgotPassword: undefined;
  Dashboard: undefined;
  Main: undefined;
};

export type UserVerificationStackParameters = {
  Pending: undefined;
  Success: undefined;
};

export type PasswordResetParameters = {
  ForgotPassword: undefined;
  ForgotPasswordConfirmation: undefined;
  ResetPasswordVerifyCode: undefined;
  ResetPassword: undefined;
  ResetPasswordConfirmation: undefined;
};

export type HomeStackParameters = {
  Home: undefined;
};

export type UserVerificationNavigationProps<T extends keyof UserVerificationStackParameters> = {
  navigation: StackNavigationProp<UserVerificationStackParameters, T>;
  route: RouteProp<UserVerificationStackParameters, T>;
};

export type AppNavigationProps<T extends keyof AppStackParameters> = {
  navigation: StackNavigationProp<AppStackParameters, T>;
  route: RouteProp<AppStackParameters, T>;
};


