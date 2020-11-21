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

interface AppNavigationProps { }

const AppNavigation = ({ }: AppNavigationProps) => {
    const dispatch = useDispatch();
    const { theme } = useSelector(
        (state: RootState) => state.app,
    );
    const setTheme = useCallback(
        () => {
            dispatch(toggleTheme({ theme: theme === themes.dark ? themes.light : themes.dark }))
        },
        [theme]
    );
    const barStyle = theme === themes.light
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
