import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Linking, Alert } from 'react-native';
import { analyticEvents, analytics } from '../services/analytics';

export const openBrowser = async (uri: string, analyticsEvent?: {name: analyticEvents; sourceScreen: string}) => {
  if (analyticsEvent) {
    const { name, sourceScreen } = analyticsEvent;
    analytics.logEvent(name, { sourceScreen });
  }
  try {
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(uri, {
        // iOS Properties
        dismissButtonStyle: 'close',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'popover',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        headers: {
          // Fix for 301 redirect cached on some Android phones
          ...(uri.includes('support.floos.ae') && { 'Cache-Control': 'no-cache' })
        }
      });
    } else Linking.openURL(uri);
  } catch (error) {
    Alert.alert(error.message);
  }
};

export default {
  openBrowser
};
