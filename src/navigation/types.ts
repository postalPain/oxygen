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
  ForgotPasswordRequested = 'ForgotPasswordRequested',
  VerificationCodeForgot = 'VerificationCodeForgot',
  UserVerificationPending = 'UserVerificationPending',
  ForgotPassword = 'ForgotPassword',
  UserInfoConfirmation = 'UserInfoConfirmation',
  TabNavigation = 'TabNavigation',
  Dashboard = 'Dashboard',
  Transactions = 'Transactions',
  Profile = 'Profile',
  WithdrawalSelect = 'WithdrawalSelect',
  WithdrawalOverview = 'WithdrawalOverview',
  WithdrawalConfirmation = 'WithdrawalConfirmation',
}

export type AppStackParameters = {
  Loading: undefined;
  Onboarding: undefined;
  SignIn: { noBackButton?: boolean };
  SignInForgot: undefined;
  EnterRegistrationId: { backendError: string };
  EnterEmail: { backendError: string };
  EnterEmailSignUp: { backendError: string };
  SetPasswordSignUp: { backendError: string };
  SetPasswordForgot: undefined;
  DataPrivacy: undefined;
  VerificationCodeSignUp: undefined;
  VerificationCodeForgot: undefined;
  ForgotPasswordRequested: undefined;
  UserVerificationPending: undefined;
  PasswordReset: undefined;
  ForgotPassword: undefined;
  TabNavigation: undefined;
  Dashboard: undefined;
  Transactions: undefined;
  Profile: undefined;
  Main: undefined;
  UserInfoConfirmation: { noBackButton?: boolean };
  WithdrawalSelect: undefined;
  WithdrawalOverview: undefined;
  WithdrawalConfirmation: undefined;
};

export type AppNavigationProps<T extends keyof AppStackParameters> = {
  navigation: StackNavigationProp<AppStackParameters, T>;
  route: RouteProp<AppStackParameters, T>;
};


