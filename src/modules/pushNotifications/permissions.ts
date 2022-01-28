import env from 'env';
import { checkNotifications } from 'react-native-permissions';

export const requestNotificationPermissions = async () => {
  return checkNotifications().then(({ status, settings }) => {
    console.log('status', status);
    console.log('settings', settings);
  });
};
