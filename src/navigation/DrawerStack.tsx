import React from 'react';
// libs
import { createDrawerNavigator } from '@react-navigation/drawer';
// scenes
import HomeNavigationStack from './HomeStack';

interface DrawerProps { }

const DrawerStackNavigator = createDrawerNavigator();

const DrawerStack = ({ }: DrawerProps) => {
  return (
    <DrawerStackNavigator.Navigator initialRouteName="Home">
      <DrawerStackNavigator.Screen name="Home" component={HomeNavigationStack} />
    </DrawerStackNavigator.Navigator>
  );
};

export default DrawerStack;
