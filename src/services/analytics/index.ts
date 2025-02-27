import firebaseAnalytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';
import { Mixpanel } from 'mixpanel-react-native';
import { IUserProps } from './types';
import env from 'env';
import { mapUserProps } from './utils';
import vocab from 'i18n';
import { MIXPANEL_TOKEN } from '@env';
import moment from 'moment';

export enum analyticEvents {
  signUpStarted = 'signup_started',
  signUpCompleted = 'signup_completed',
  cantFindRegistrationId = 'reg_id_not_found',
  madeWithdrawal = 'made_withdrawal',
  dashboardOpenInfo = 'dashboard_info_modal_viewed',
  helpViewed = 'help_viewed',
  firstLogin = 'first_login',
  login = 'app_login',
  forced_update = 'forced_update',
  screenshot_taken = 'screenshot_taken',
}

export const analytics = (() => {
  const analyticsDisabled = !env.prod;
  const mixpanel = new Mixpanel(MIXPANEL_TOKEN);

  const initialise = async () => {
    await mixpanel.init();
    const distinctId = await mixpanel.getDistinctId();
    mixpanel.identify(distinctId);
    await setUserProperties({
      appVersion: env.version,
      language: vocab.getLanguageName(),
    });
  };

  const logEvent = async (name: analyticEvents, params?: Record<string, any>) => {
    if (analyticsDisabled) {
      return Promise.resolve();
    }

    crashlytics().log(`Event ${name}`);
    mixpanel.track(name, params);
    return await firebaseAnalytics().logEvent(name, params);
  };

  const logScreen = async (name: string) => {
    if (analyticsDisabled) {
      return Promise.resolve();
    }

    crashlytics().log(`Navigated to ${name}`);
    return await firebaseAnalytics().logScreenView({
      screen_name: name,
      screen_class: name,
    });
  };

  const setUserProperties = async (props: Partial<IUserProps>) => {
    if (analyticsDisabled) {
      return Promise.resolve();
    }
    const userProps = mapUserProps(props);
    mixpanel.getPeople().set(userProps);
    return await firebaseAnalytics().setUserProperties(userProps);
  };

  !analyticsDisabled && initialise();

  return {
    logEvent,
    logScreen,
    setUserProperties,
    getTimestamp: () => moment().utc().toISOString(),
  };
})();
