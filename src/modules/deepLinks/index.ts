import { useEffect, useState } from 'react';
import dynamicLinks, { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';
import { getQueryStringParams } from 'utils/url';

export interface DeepLink {
  url: string;
  path: string;
  topic: string;
}

export const parseDeepLink = <T extends DeepLink>(fbLink: FirebaseDynamicLinksTypes.DynamicLink): T => {
  if (!fbLink) { // Is null in getInitialLink() when app is launched without initial link
    return;
  }

  const [url, paramsString] = fbLink.url.split('?');
  const path = url.replace(/^https?:\/\//, '').replace(/\/+$/, '').split('/')[1];
  const params = getQueryStringParams(paramsString);

  return {
    url,
    path,
    ...params,
  };
};

export const useDeepLink = <T extends DeepLink>(topic?: string): T[] => {
  const [link, setLink] = useState<T>(null);

  useEffect(() => {
    const onLink = (fbLink: FirebaseDynamicLinksTypes.DynamicLink) => {
      const deepLink = parseDeepLink<T>(fbLink);
      deepLink && (!topic || topic === deepLink.topic) && setLink(deepLink);
    };

    const unsubscribe = dynamicLinks().onLink(onLink);

    // getInitialLink() won't return a link instantly https://github.com/invertase/react-native-firebase/issues/4548
    dynamicLinks().getInitialLink().then(onLink);
    return () => unsubscribe();
  }, []);

  return [link];
};