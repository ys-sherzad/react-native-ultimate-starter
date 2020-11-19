/**
 * React Native Ultimate Starter
 * https://github.com/ys-sherzad/react-native-ultimate-starter
 *
 * @format
 */

import React from 'react';

// libs
import { NavigationContainer } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// main stack navigation
import RootStack from './src/navigation/RootStack';

// utils
import { ThemeLight, ThemeDark } from './src/utils';

// store
import store, { persistor } from './src/store';


// build styles
EStyleSheet.build(ThemeDark);

const App = () => {
  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} {...{ persistor }}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
