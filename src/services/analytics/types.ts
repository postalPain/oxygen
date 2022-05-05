export interface IAnalyticsUserProps {
  app_version: string;
  device_default_language: string;
  internal_uid: string;
  company_code: string;
  push_notifications: string;
  biometric_login: string;
  company_id: string;
  transaction_all_time_count: string;
  transaction_all_time_count_value: string;
  transaction_all_time_count_service_charge: string;
  transaction_last_updated: string;
}

export interface IUserProps {
  appVersion: string;
  language: string;
  distinctId: number;
  companyCode: string;
  pushNotificationsEnabled: boolean;
  biometricLoginEnabled: boolean;
  companyId: number;
  transactionsCount: number;
  transactionsValue: number;
  transactionsServiceCharge: number;
  transactionLastUpdated: string;
}

export type WithdrawalOptions = 'default-value' | 'via-slider' | 'via-quick-tags' | 'via-keyboard-entry';

export type WithdrawalSource = 'via-dashboard' | 'via-empty-transaction';
