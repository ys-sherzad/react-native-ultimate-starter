/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

// libs
import { NavigationContainer } from '@react-navigation/native';

// main stack navigation
import MainNavigation from './src/navigation-stack/MainNavigation';



const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
