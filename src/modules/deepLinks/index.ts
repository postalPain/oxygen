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

let initialLink = null;

export const useDeepLink = <T extends DeepLink>(topic?: string): T[] => {
  const [link, setLink] = useState<T>(null);

  useEffect(() => {
    const onLink = (fbLink: FirebaseDynamicLinksTypes.DynamicLink) => {
      const deepLink = parseDeepLink<T>(fbLink);
      deepLink && (!topic || (topic === deepLink.topic)) && setLink(deepLink);
    };
    const unsubscribe = dynamicLinks().onLink(onLink);

    // On my Android emulator getInitialLink() returns value only when called for the first time
    // The hook that first calls it gets value, all the subsequent hooks don't, so using local var
    dynamicLinks().getInitialLink().then(_link => initialLink = initialLink || _link);
    initialLink && onLink(initialLink);
    return () => unsubscribe();
  }, []);

  return [link];
};