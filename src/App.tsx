import React from 'react';
import { Provider } from 'react-redux';
import { ThemeContextProvider } from '@stryberventures/stryber-react-native-ui-components';
import store from 'modules/store';
import Navigation from 'navigation';
import theme from 'config/theme';

// import { setupSentry } from 'services/Sentry/sentry';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider themes={[theme]}>
        <Navigation />
      </ThemeContextProvider>
    </Provider>
  );
}
export default App;
