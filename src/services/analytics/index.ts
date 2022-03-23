import firebaseAnalytics from '@react-native-firebase/analytics';
import { IUserProps } from './types';
import env from 'env';
import { mapUserProps } from './utils';
import vocab from 'i18n';

export enum analyticEvents {
  signUpStarted = 'signup_started',
  signUpCompleted = 'signup_completed',
  cantFindRegistrationId = 'reg_id_not_found',
  madeWithdrawal = 'made_withdrawal',
  dashboardOpenInfo = 'dashboard_info_modal_viewed',
  helpViewed = 'help_viewed',
}

export const analytics = (() => {
  const analyticsDisabled = env.dev || env.e2e;

  const logEvent = async (name: analyticEvents, params?: Record<string, any>) => {
    if (analyticsDisabled) {
      return Promise.resolve();
    }
    return await firebaseAnalytics().logEvent(name, params);
  };

  const logScreen = async (name: string) => {
    if (analyticsDisabled) {
      return Promise.resolve();
    }
    return await firebaseAnalytics().logScreenView({
      screen_name: name,
      screen_class: name,
    });
  };

  const setUserProperties = async (props: Partial<IUserProps>) => {
    if (analyticsDisabled) {
      return Promise.resolve();
    }
    return await firebaseAnalytics().setUserProperties(mapUserProps(props));
  };

  setUserProperties({
    appVersion: env.version,
    language: vocab.language,
  });

  return {
    logEvent,
    logScreen,
    setUserProperties,
  };
})();

