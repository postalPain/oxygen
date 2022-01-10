import { useEffect, useState } from 'react';
import dynamicLinks, { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';
import { parseDeepLink } from '..';

export interface DeepLink {
  url: string;
  topic: string;
  [param: string]: string;
}

export const useDynamicLinks = () => {
  const [link, setLink] = useState<DeepLink>(null);

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(fbLink => setLink(parseDeepLink(fbLink)));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log('link', link);

  }, [link]);

  return [link];
};