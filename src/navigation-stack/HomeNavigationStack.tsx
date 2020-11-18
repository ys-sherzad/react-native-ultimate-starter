import React from 'react';
// libs
import { createStackNavigator } from '@react-navigation/stack';
// scenes
import Home from '../containers/Home.container';

interface HomeNavigationStackProps { }

const HomeStack = createStackNavigator();

const HomeNavigationStack = ({ }: HomeNavigationStackProps) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name='home'
                component={Home}
            />
        </HomeStack.Navigator>
    );
};

export default HomeNavigationStack;

