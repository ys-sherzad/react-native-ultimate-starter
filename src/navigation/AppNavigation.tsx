import React from 'react';

// libs
import { NavigationContainer } from '@react-navigation/native';

// main stack navigation
import RooStack from './RootStack';

// context
import { ThemeProvider } from '../lib/ThemeContext';

// Higher order component providing theme and toggle function props
import withTheme from '../components/HOC/withTheme';

interface AppNavigationProps {
    theme: any;
    toggleTheme: () => {};
}

const AppNavigation = ({ theme, toggleTheme }: AppNavigationProps) => {
    return (
        <ThemeProvider value={{ theme, toggleTheme }}>
            <NavigationContainer>
                <RooStack />
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default withTheme(AppNavigation);
