import React from 'react';
import { View } from 'react-native';
// libs
import { NavigationContainer } from '@react-navigation/native';

// main stack navigation
import RooStack from './RootStack';

// context
import { ThemeProvider } from '../lib/ThemeContext';

// hook
import useWithTheme from '../components/hooks/useWithTheme';

interface AppNavigationProps { }

const AppNavigation = ({ }: AppNavigationProps) => {
    const { theme, toggleTheme } = useWithTheme();
    return (
        <ThemeProvider value={{ theme, toggleTheme }}>
            {/* wrapping the navigation container with our theme backgroundColor to fix the white flashing background
             while transitioning between screens on some android devices */}
            <View style={{ flex: 1, backgroundColor: theme.$background }}>
                <NavigationContainer>
                    <RooStack />
                </NavigationContainer>
            </View>
        </ThemeProvider>

    );
}

export default AppNavigation


