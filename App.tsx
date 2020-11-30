/**
 * React Native Ultimate Starter
 * https://github.com/ys-sherzad/react-native-ultimate-starter
 *
 * @format
 */

import React from 'react';
// libs
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// store
import store, { persistor } from './src/store';
// libs
import { AppearanceProvider } from 'react-native-appearance';
// main App navigation / entry
import AppNavigation from './src/navigation/AppNavigation';


const App = () => {
  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} {...{ persistor }}>
        <AppearanceProvider>
          <AppNavigation />
        </AppearanceProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
