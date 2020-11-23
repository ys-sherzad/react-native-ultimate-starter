import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

// a hook handling startup tasks or operation

const startup = () => {

    const { theme } = useSelector(
        (state: RootState) => state.app
    );
    // handle status bar style on theme change
    const _handleStatusBar = () => {
        const barStyle = theme.$mode === 'light'
            ? 'dark-content'
            : 'light-content';
        StatusBar.setBackgroundColor(theme.$statusBarBgColor, true);
        StatusBar.setBarStyle(barStyle, true);
    }

    // run "_handleStatusBar" only when theme is toggled
    useEffect(() => {
        _handleStatusBar();
    }, [theme])

    return null;
};

export default startup;

