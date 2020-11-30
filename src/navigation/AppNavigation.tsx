import React from 'react';
import { View } from 'react-native';
// libs
import { NavigationContainer } from '@react-navigation/native';

// main stack navigation
import RooStack from './RootStack';

// hook for getting theme from store and its action creator toggle theme,
// and handle status bar style
import useTheme from '../hooks/useTheme';

// start up tasks
import startup from '../hooks/startup';


/**
 * "NavigationContainer" is wrapped in a view with theme's background color to fix the white flashing background 
 *  while transitioning between screens on some android devices.
 */
const AppNavigation = () => {
    // run start up tasks
    startup();

    const { theme } = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: theme.$background }}>
            <NavigationContainer>
                <RooStack />
            </NavigationContainer>
        </View>
    );
};

export default AppNavigation;


