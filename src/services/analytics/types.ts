export interface IAnalyticsUserProps {
  app_version: string;
  device_default_language: string;
  distinct_id: string;
  company_code: string;
  push_notifications: string;
  biometric_login: string;
}

export interface IUserProps {
  appVersion: string;
  language: string;
  distinctId: number;
  companyCode: string;
  pushNotificationsEnabled: boolean;
  biometricLoginEnabled: boolean;
}
