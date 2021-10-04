import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeContextProvider } from '@stryberventures/stryber-react-native-ui-components';
import store from 'modules/store';
import Navigation from 'navigation';
import theme from 'config/theme';
import SplashScreen from 'react-native-splash-screen';

// import { setupSentry } from 'services/Sentry/sentry';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <ThemeContextProvider themes={[theme]}>
        <Navigation />
      </ThemeContextProvider>
    </Provider>
  );
};
export default App;
