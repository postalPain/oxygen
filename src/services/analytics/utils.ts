import { IAnalyticsUserProps, IUserProps } from './types';

export const userPropsMap: Record<keyof IUserProps, keyof IAnalyticsUserProps> = {
  appVersion: 'app_version',
  language: 'device_default_language',
  distinctId: 'internal_uid',
  companyCode: 'company_code',
  pushNotificationsEnabled: 'push_notifications',
  biometricLoginEnabled: 'biometric_login',
  companyId: 'company_id',
  transactionsCount: 'transaction_all_time_count',
  transactionsValue: 'transaction_all_time_count_value',
  transactionsServiceCharge: 'transaction_all_time_count_service_charge',
  transactionLastUpdated: 'transaction_last_updated',
};

export const mapUserProps = (props: Partial<IUserProps>): Partial<IAnalyticsUserProps> => {
  const analyticsProps = {};

  Object.keys(props).forEach((key) => {
    const mapKey = userPropsMap[key];
    if (userPropsMap[key]) {
      analyticsProps[mapKey] = String(props[key]);
    }
  });

  return analyticsProps;
};

