import firebaseAnalytics from '@react-native-firebase/analytics';
import { Mixpanel } from 'mixpanel-react-native';
import { IUserProps } from './types';
import env from 'env';
import { mapUserProps } from './utils';
import vocab from 'i18n';
import { MIXPANEL_TOKEN } from '@env';

export enum analyticEvents {
  signUpStarted = 'signup_started',
  signUpCompleted = 'signup_completed',
  cantFindRegistrationId = 'reg_id_not_found',
  madeWithdrawal = 'made_withdrawal',
  dashboardOpenInfo = 'dashboard_info_modal_viewed',
  helpViewed = 'help_viewed',
  login = 'app_login',
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
      language: vocab.language,
    });
  };

  const logEvent = async (name: analyticEvents, params?: Record<string, any>) => {
    if (analyticsDisabled) {
      return Promise.resolve();
    }
    mixpanel.track(name, params);
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
    const userProps = mapUserProps(props);
    mixpanel.getPeople().set(userProps);
    return await firebaseAnalytics().setUserProperties(userProps);
  };

  !analyticsDisabled && initialise();

  return {
    logEvent,
    logScreen,
    setUserProperties,
  };
})();

