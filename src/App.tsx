import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeContextProvider } from '@stryberventures/stryber-react-native-ui-components';
import store from 'modules/store';
import Navigation from 'navigation';
import theme from 'config/theme';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider themes={[theme]}>
        <Navigation />
      </ThemeContextProvider>
    </Provider>
  );
};
export default App;
