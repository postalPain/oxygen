import React from 'react';
import { Provider } from 'react-redux';
import { ThemeContextProvider } from '@stryberventures/stryber-react-native-ui-components';
import store from 'modules/store';
import Navigation from 'navigation';
import InAppNotification from 'components/InAppNotification';
import theme from 'config/theme';
import WithModal from 'components/WithModal';
import AppStatusBlur from './components/AppStatusBlur';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider themes={[theme]}>
        <WithModal>
          <Navigation />
          <InAppNotification />
          <AppStatusBlur />
        </WithModal>
      </ThemeContextProvider>
    </Provider>
  );
};
export default App;
