import { DeepLink, useDeepLink } from 'modules/deepLinks';
import { AppScreenNames } from 'navigation/types';
import { useEffect, useState } from 'react';

const topic2screenName = {
  dashboard: AppScreenNames.Dashboard,
  transactions: AppScreenNames.TransactionsStack,
  profile: AppScreenNames.ProfileStack,
  withdraw: AppScreenNames.WithdrawalSelect,
};

const useTabNavigationDeepLinks = () => {
  const [deepLink] = useDeepLink<DeepLink>();
  const [screenName, setScreenName] = useState<AppScreenNames>();

  useEffect(() => {
    deepLink && topic2screenName[deepLink.topic] && setScreenName(topic2screenName[deepLink.topic]);
  }, [deepLink]);

  return screenName;
};

export default useTabNavigationDeepLinks;