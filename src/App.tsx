import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, Text, View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';
// import theme from 'config/theme';
import { ThemeContextProvider } from '@stryberventures/stryber-react-native-ui-components';


export const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
    </PersistGate>
    {/*<ThemeContextProvider themes={[theme]}>*/}
    <ThemeContextProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View>
        <Text>Oxygen</Text>
      </View>
    </ThemeContextProvider>
  </Provider>
);
