import { DeepLink, useDeepLink } from 'modules/deepLinks';
import { AppScreenNames } from 'navigation/types';
import { useEffect } from 'react';

const topic2screenName = {
  dashboard: AppScreenNames.Dashboard,
  transactions: AppScreenNames.TransactionsStack,
  profile: AppScreenNames.ProfileStack,
  withdraw: AppScreenNames.WithdrawalSelect,
};

const useTabNavigationDeepLinks = (navigate) => {
  const [deepLink] = useDeepLink<DeepLink>();

  useEffect(() => {
    deepLink && topic2screenName[deepLink.topic] && navigate(topic2screenName[deepLink.topic]);
  }, [deepLink]);
};

export default useTabNavigationDeepLinks;