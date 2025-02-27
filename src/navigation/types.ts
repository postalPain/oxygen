import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/core';
import { ITransaction } from 'modules/transactions/types';

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
  AuthorizedStack = 'AuthorizedStack',
  TabNavigation = 'TabNavigation',
  Dashboard = 'Dashboard',
  TransactionsStack = 'TransactionsStack',
  Transactions = 'Transactions',
  TransactionDetails = 'TransactionDetails',
  ProfileStack = 'ProfileStack',
  Profile = 'Profile',
  AccountDetails = 'AccountDetails',
  Settings = 'Settings',
  SettingsLanguage = 'SettingsLanguage',
  WithdrawalSelect = 'WithdrawalSelect',
  WithdrawalOverview = 'WithdrawalOverview',
  WithdrawalConfirmation = 'WithdrawalConfirmation',
  Debug = 'Debug',
  Update = 'Update'
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
  AuthorizedStack: undefined;
  TabNavigation: undefined;
  Dashboard: undefined;
  TransactionsStack: { id: number };
  Transactions: undefined;
  TransactionDetails: { id: number };
  ProfileStack: undefined;
  Profile: undefined;
  AccountDetails: undefined;
  Settings: undefined;
  SettingsLanguage: undefined;
  Main: undefined;
  UserInfoConfirmation: { noBackButton?: boolean };
  WithdrawalSelect: undefined;
  WithdrawalOverview: undefined;
  WithdrawalConfirmation: undefined;
  Debug: undefined;
  Update: undefined;
};

export type AppNavigationProps<T extends keyof AppStackParameters> = {
  navigation: StackNavigationProp<AppStackParameters, T>;
  route: RouteProp<AppStackParameters, T>;
};


