import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/core';

export enum AppScreenNames {
  Onboarding = 'Onboarding',
  SignIn = 'SignIn',
  EnterRegistrationId = 'EnterRegistrationId',
  EnterEmail = 'EnterEmail',
  SetPassword = 'SetPassword',
  DataPrivacy = 'DataPrivacy',
  VerificationCode = 'VerificationCode',
  UserVerificationRequested = 'UserVerificationRequested',
  ResetPassword = 'ResetPassword',
  UserVerification = 'UserVerification',
  UserVerificationPending = 'UserVerificationPending',
  ForgotPassword = 'ForgotPassword',
  Home = 'Home',
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

export const AppScreenPermissions: IScreenPermissionsTable = {
  [AppScreenNames.Onboarding]: { access: [IUserAccess.unauthenticated], default: true },
  [AppScreenNames.SignIn]: { access: [IUserAccess.unauthenticated] },
  [AppScreenNames.ResetPassword]: { access: [IUserAccess.unauthenticated] },
  [AppScreenNames.DataPrivacy]: { access: [IUserAccess.unauthenticated] },
  [AppScreenNames.UserVerification]: { access: [IUserAccess.new] },
  [AppScreenNames.UserVerificationPending]: {
    access: [IUserAccess.new, IUserAccess.pending, IUserAccess.active],
    default: true,
    redirectTo: AppScreenNames.SignIn,
  },
  [AppScreenNames.Home]: { access: [IUserAccess.active], default: true },
};

export const isScreenAuthorized = (permissionsTable: IScreenPermissionsTable, screenName: string, userAccess: IUserAccess): boolean => {
  const screenPermissions = permissionsTable[screenName];
  return !!screenPermissions && screenPermissions.access?.indexOf(userAccess) > -1;
};

export const getRedirectScreen = (permissionsTable: IScreenPermissionsTable, currentScreen: string, userAccess: IUserAccess): string => {
  /** Check user permissions to be on a current screen */
  if (!isScreenAuthorized(permissionsTable, currentScreen, userAccess) || !currentScreen) {
    /** Check if there is a priority redirect */
    const screenInfo = permissionsTable[currentScreen];
    if (screenInfo && screenInfo.redirectTo && isScreenAuthorized(permissionsTable, screenInfo.redirectTo, userAccess)) {
      return screenInfo.redirectTo;
    }
    /** User doesn't have permissions */
    const defaultScreens: { key: string; value: IScreenPermission }[] = Object
      .entries(permissionsTable)
      .map(([key, value]: [string, IScreenPermission]) => ({
        key,
        value,
      }))
      .filter((d: { key: string; value: IScreenPermission }) => (
        d.value.access.indexOf(userAccess) > -1 &&
        d.value.default
      ));
    defaultScreens.sort((a, b) => a.value.access.length > b.value.access.length ? 1 : -1);
    const defaultScreen = defaultScreens[0];
    if (defaultScreen) {
      return defaultScreen.key;
    }
  }

  return '';
};

export enum UserVerificationScreenNames {
  Pending = 'Pending',
  Success = 'Success',
}

export enum PasswordResetScreenNames {
  ForgotPassword = 'ForgotPassword',
  ForgotPasswordConfirmation = 'ForgotPasswordConfirmation',
  ResetPasswordVerifyCode = 'ResetPasswordVerifyCode',
  ResetPassword = 'ResetPassword',
  ResetPasswordConfirmation = 'ResetPasswordConfirmation',
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
  Onboarding: undefined;
  SignIn: undefined;
  EnterRegistrationId: { backendError: string };
  EnterEmail: { backendError: string };
  SetPassword: { backendError: string };
  DataPrivacy: undefined;
  VerificationCode: undefined;
  UserVerificationRequested: undefined;
  UserVerification: undefined;
  UserVerificationPending: undefined;
  PasswordReset: undefined;
  ForgotPassword: undefined;
  Main: undefined;
};

export type UserVerificationStackParameters = {
  Pending: undefined;
  Success: undefined;
};

export type SignUpStackParameters = {
  EnterRegistrationId: undefined;
  EnterEmail: undefined;
  SetPassword: undefined;
  DataPrivacy: undefined;
  UserVerificationRequested: undefined;
  UserVerification: undefined;
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


