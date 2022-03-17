import { IAnalyticsUserProps, IUserProps } from './types';

export const userPropsMap: Record<keyof IUserProps, keyof IAnalyticsUserProps> = {
  appVersion: 'app_version',
  language: 'device_default_language',
  distinctId: 'distinct_id',
  companyCode: 'company_code',
  pushNotificationsEnabled: 'push_notifications',
  biometricLoginEnabled: 'biometric_login',
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

