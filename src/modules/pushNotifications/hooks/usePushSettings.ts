import messaging from '@react-native-firebase/messaging';
import env from 'env';
import useAppState from 'modules/app/hooks/useAppState';
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { checkNotifications, PermissionStatus, requestNotifications } from 'react-native-permissions';
import { analytics } from 'services/analytics';

export enum pushesStoredKeys {
  fcmToken = 'fcmToken',
}

export const usePushSettings = () => {
  const [enabled, setEnabled] = useState<boolean>();
  const [permissions, setPermissions] = useState<PermissionStatus>();
  const appState = useAppState();

  useEffect(() => {
    (async () => {
      if (appState === 'active') {
        const _permissions = await checkNotifications();
        setPermissions(_permissions.status);

        setEnabled(_permissions.status === 'granted');
      }
    })();
  }, [appState]);

  useEffect(() => {
    analytics.setUserProperties({ pushNotificationsEnabled: !!enabled });
  }, [enabled]);

  const requestPermissions = async (): Promise<PermissionStatus> => {
    let permissionStatus: PermissionStatus;
    if (env.ios) {
      const _permissions = await requestNotifications(['alert', 'sound']);
      permissionStatus = _permissions.status;
    } else {
      permissionStatus = 'granted';
    }
    setPermissions(permissionStatus);

    return permissionStatus;
  };

  const requestPushes = async (_email?: string) => {
    const newStatus = await requestPermissions();

    if (newStatus === 'granted') {
      setEnabled(true);
    }
    return newStatus;
  };

  return {
    pushEnabled: enabled,
    pushPermissions: permissions,
    pushNotRequested: permissions === 'denied',
    getToken: async () => {
      const token = await messaging().getToken();
      return token;
    },
    requestPushes,
    togglePushes: () => Linking.openSettings(),

    ...(env.e2e && {
      pushEnabled: false,
      requestPushes: (mail?: string) => {
        return null;
      },
    })
  };
};


