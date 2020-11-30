/**
 * A hook handling startup tasks
 * 
 * (_handleStatusBar) function runs when theme changes updating the statusbar
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { PlatformUtils } from '../utils';

const startup = () => {

    // take "theme"
    const { theme } = useSelector(
        (state: RootState) => state.app
    );

    // run "_handleStatusBar" only when theme is toggled
    React.useEffect(() => {
        _handleStatusBar();
    }, [theme]);

    // handle statusbar style on theme change
    const _handleStatusBar = () => {
        const barStyle = theme.$mode === 'light'
            ? 'dark-content'
            : 'light-content';
        if (PlatformUtils.isAndroid) {
            StatusBar.setBackgroundColor(theme.$statusBarBgColor, true);
        }
        StatusBar.setBarStyle(barStyle, true);
    };

    // Add other start-up tasks...

    return null;
};

export default startup;

