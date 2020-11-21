/**
 * React Native Ultimate Starter
 * https://github.com/ys-sherzad/react-native-ultimate-starter
 *
 * @format
 */

import React from 'react';

// libs
// import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';


// utils
import { ThemeLight, ThemeDark } from './src/utils';

// store
import store, { persistor } from './src/store';

// libs
import { AppearanceProvider } from 'react-native-appearance';

// main App navigation / entry
import AppNavigation from './src/navigation/AppNavigation';


// build styles
// EStyleSheet.build(ThemeLight);

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
