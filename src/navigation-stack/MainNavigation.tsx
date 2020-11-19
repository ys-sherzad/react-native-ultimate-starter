import React from 'react';
// libs
import { createStackNavigator } from '@react-navigation/stack';

// scenes
import DrawerNavigation from './DrawerNavigation';


interface MainNavigationProps { }

const RootStack = createStackNavigator();

const MainNavigation = ({ }: MainNavigationProps) => {
    return (
        <RootStack.Navigator initialRouteName='home' mode='modal'>
            <RootStack.Screen
                name='drawer'
                component={DrawerNavigation}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
};

export default MainNavigation;
