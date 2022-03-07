import firebaseAnalytics from '@react-native-firebase/analytics';
// import { IUserProps } from './types';
import env from '../../env';

export enum analyticEvents {
  signUpStarted = 'signup_started',
  signUpCompleted = 'signup_completed',
  cantFindRegistrationId = 'reg_id_not_found',
  madeWithdrawal = 'made_withdrawal',
  dashboardOpenInfo = 'dashboard_info_modal_viewed',
  helpViewed = 'help_viewed',
}

export const analytics = (() => {
  // let userProperties: Record<string, string> = {};

  const logEvent = async (name: analyticEvents, params?: Record<string, any>) => {
    if (env.dev || env.e2e) {
      return Promise.resolve();
    }
    return await firebaseAnalytics().logEvent(name, params);
  };

  const logScreen = async (name: string) => {
    return await firebaseAnalytics().logScreenView({
      screen_name: name,
      screen_class: name,
    });
  };

  // const setUser = (data: IUserProps) => {
  //   userProperties = {
  //     ...userProperties,
  //     ...data,
  //   };
  // };

  return {
    logEvent,
    logScreen,
  };
})();

