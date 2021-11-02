import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/core';

export enum AppScreenNames {
  Loading = 'Loading',
  Onboarding = 'Onboarding',
  SignIn = 'SignIn',
  SignInForgot = 'SignInForgot',
  EnterRegistrationId = 'EnterRegistrationId',
  EnterEmail = 'EnterEmail',
  SetPasswordSignUp = 'SetPasswordSignUp',
  SetPasswordForgot = 'SetPasswordForgot',
  DataPrivacy = 'DataPrivacy',
  VerificationCodeSignUp = 'VerificationCodeSignUp',
  UserVerificationRequested = 'UserVerificationRequested',
  VerificationCodeForgot = 'VerificationCodeForgot',
  UserVerificationRequestedSignUp = 'UserVerificationRequestedSignUp',
  UserVerificationRequestedForgot = 'UserVerificationRequestedForgot',
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
  SignInForgot: undefined;
  EnterRegistrationId: { backendError: string };
  EnterEmail: { backendError: string };
  EnterEmailSignUp: { backendError: string };
  SetPasswordSignUp: { backendError: string };
  SetPasswordForgot: undefined;
  DataPrivacy: undefined;
  VerificationCodeSignUp: undefined;
  VerificationCodeForgot: undefined;
  UserVerificationRequestedSignUp: undefined;
  UserVerificationRequestedForgot: undefined;
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


