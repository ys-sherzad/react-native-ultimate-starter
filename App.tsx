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

// main stack navigation
import MainNavigation from './src/navigation-stack/MainNavigation';

// utils
import { ThemeLight } from './src/utils';


// build styles
EStyleSheet.build(ThemeLight);

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
