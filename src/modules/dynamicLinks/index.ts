import dynamicLinks, { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';
import { getQueryStringParams } from 'utils/url';
import { DeepLink } from './hooks';

export const parseDeepLink = (fbLink: FirebaseDynamicLinksTypes.DynamicLink) => {
  if (!fbLink) { // Is null in getInitialLink() when app is launched without initial link
    return;
  }

  const [url, paramsString] = fbLink.url.split('?');

  const params = getQueryStringParams(paramsString);

  return {
    url,
    ...params,
  };
};

export const getInitialDeepLink = async (): Promise<DeepLink> => {
  console.log('dynamicLinks()', dynamicLinks());

  const fbLink = await dynamicLinks().getInitialLink();

  console.log('fbLink', fbLink);

  return parseDeepLink(fbLink);
};