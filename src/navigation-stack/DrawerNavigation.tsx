import React from 'react';
// libs
import { createDrawerNavigator } from '@react-navigation/drawer';
// scenes
import HomeNavigationStack from './HomeStack';

interface DrawerProps { }

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ }: DrawerProps) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigationStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
