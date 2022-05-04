import React from 'react';
import { Provider } from 'react-redux';
import { ThemeContextProvider } from '@stryberventures/stryber-react-native-ui-components';
import store from 'modules/store';
import Navigation from 'navigation';
import InAppNotification from 'components/InAppNotification';
import theme from 'config/theme';
import WithModal from 'components/WithModal';
import AppState from 'modules/app/component';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider themes={[theme]}>
        <WithModal>
          <Navigation />
          <InAppNotification />
          <AppState />
        </WithModal>
      </ThemeContextProvider>
    </Provider>
  );
};
export default App;
