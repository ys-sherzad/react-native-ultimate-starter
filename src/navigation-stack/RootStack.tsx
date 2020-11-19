import React from 'react';
// libs
import { createStackNavigator } from '@react-navigation/stack';

// scenes
import DrawerStack from './DrawerStack';


interface RooStackProps { }

const RootStackNavigator = createStackNavigator();

const RooStack = ({ }: RooStackProps) => {
    return (
        <RootStackNavigator.Navigator initialRouteName='home' mode='modal'>
            <RootStackNavigator.Screen
                name='drawer'
                component={DrawerStack}
                options={{ headerShown: false }}
            />
        </RootStackNavigator.Navigator>
    );
};

export default RooStack;
