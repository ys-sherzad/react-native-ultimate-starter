import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// libs
import { NavigationContainer } from '@react-navigation/native';
// import EStyleSheet from 'react-native-extended-stylesheet';
// main stack navigation
import RooStack from './RootStack';
// utils
// context
import { ThemeProvider } from '../lib/ThemeContext';
import { themes } from '../utils/theme';
import { RootState } from '../store/rootReducer';
import { toggleTheme } from '../slices/appSlice';

import { Appearance } from 'react-native-appearance'
const systemTheme = Appearance.getColorScheme();

interface AppNavigationProps { }

const AppNavigation = ({ }: AppNavigationProps) => {
    console.log('systemTheme <<<<<<<<<<<<<<<<<<<<<<<<<<<<< ', systemTheme);


    // take "dispatch" function
    const dispatch = useDispatch();

    // take current "theme" from app state in store
    const { theme } = useSelector(
        (state: RootState) => state.app,
    );

    // set theme by dispatching "toggleTheme" action with theme as payload
    // notice we have used "useCallback" to memoize the function
    const setTheme = useCallback(
        () => {
            dispatch(toggleTheme({ theme: theme === themes.dark ? themes.light : themes.dark }))
        },
        [theme]
    );
    // bar style for Android status bar
    const barStyle = theme.$mode === 'light'
        ? 'dark-content'
        : 'light-content';

    return (
        <ThemeProvider value={{ theme, toggleTheme: setTheme }}>
            <StatusBar backgroundColor={theme.$statusBarBgColor} barStyle={barStyle} />
            <NavigationContainer>
                <RooStack />
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default AppNavigation;
