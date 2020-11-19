import React from 'react';
// libs
import { createStackNavigator } from '@react-navigation/stack';
import EStyleSheet from 'react-native-extended-stylesheet';
// scenes
import Home from '../containers/Home.container';

interface HomeStackProps { }

const HomeStackNavigator = createStackNavigator();

const HomeStack = ({ }: HomeStackProps) => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name='home'
                component={Home}
                options={{
                    headerTitleStyle: styles.headerTitleStyle,
                    headerStyle: styles.headerStyle
                }}
            />
        </HomeStackNavigator.Navigator>
    );
};

export default HomeStack;

const styles = EStyleSheet.create({
    headerTitleStyle: {
        color: '$text'
    },
    headerStyle: {
        backgroundColor: '$headerBackground'
    }
})