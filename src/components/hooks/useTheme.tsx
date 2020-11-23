import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../slices/appSlice';
import { RootState } from '../../store/rootReducer';
import { themes } from '../../utils/theme';

// a hook returning theme and toggle function for updating/toggling theme state in store

const useTheme = () => {
    const dispatch = useDispatch();

    const { theme } = useSelector(
        (state: RootState) => state.app
    )

    const toggleTheme = useCallback(
        () => {
            dispatch(setTheme({ theme: theme.$mode === 'dark' ? themes.light : themes.dark }))
        },
        [theme]
    )

    // handle status bar style on theme change
    const _handleStatusBar = () => {
        const barStyle = theme.$mode === 'light'
            ? 'dark-content'
            : 'light-content';
        StatusBar.setBackgroundColor(theme.$statusBarBgColor, true);
        StatusBar.setBarStyle(barStyle, true);
    }
    useEffect(() => {
        _handleStatusBar();
    }, [theme])

    return { theme, toggleTheme };
};

export default useTheme;

