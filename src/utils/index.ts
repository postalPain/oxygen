import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Linking, Alert } from 'react-native';

export const openBrowser = async (uri: string) => {
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
      });
    }
    else Linking.openURL(uri);
  } catch (error) {
    Alert.alert(error.message);
  }
};

export default {
  openBrowser
};