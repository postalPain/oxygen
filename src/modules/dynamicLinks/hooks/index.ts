import { useEffect, useState } from 'react';
import dynamicLinks, { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';
import { getQueryStringParams } from 'utils/url';

export interface DeepLink {
  url: string;
  path: string;
  topic: string;
}

export const parseDeepLink = (fbLink: FirebaseDynamicLinksTypes.DynamicLink) => {
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

export const useDynamicLinks = () => {
  const [link, setLink] = useState<DeepLink>(null);

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(fbLink => {
      setLink(parseDeepLink(fbLink));
    });

    // getInitialLink() won't return a link instantly https://github.com/invertase/react-native-firebase/issues/4548
    dynamicLinks().getInitialLink().then(fbLink => setLink(parseDeepLink(fbLink)));
    return () => unsubscribe();
  }, []);

  return [link];
};