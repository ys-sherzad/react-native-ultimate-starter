import React from 'react';
// libs
import { createStackNavigator } from '@react-navigation/stack';
import EStyleSheet from 'react-native-extended-stylesheet';
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
                options={{
                    headerTitleStyle: styles.headerTitleStyle,
                    headerStyle: styles.headerStyle
                }}
            />
        </HomeStack.Navigator>
    );
};

export default HomeNavigationStack;

const styles = EStyleSheet.create({
    headerTitleStyle: {
        color: '$text'
    },
    headerStyle: {
        backgroundColor: '$headerBackground'
    }
})