import { useDynamicLinks } from 'modules/dynamicLinks/hooks';
import { AppScreenNames } from 'navigation/types';
import { useEffect, useState } from 'react';

const path2screenName = {
  dashboard: AppScreenNames.Dashboard,
  transactions: AppScreenNames.TransactionsStack,
  profile: AppScreenNames.ProfileStack,
  withdraw: AppScreenNames.WithdrawalSelect,
};

const useTabNavigationDeepLinks = () => {
  const [deepLink] = useDynamicLinks();

  const [screenName, setScreenName] = useState<AppScreenNames>(null);

  useEffect(() => {
    deepLink && path2screenName[deepLink.path] && setScreenName(path2screenName[deepLink.path]);
  }, [deepLink]);

  return [screenName];
};

export default useTabNavigationDeepLinks;