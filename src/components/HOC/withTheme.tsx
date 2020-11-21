import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../slices/appSlice';
import { RootState } from '../../store/rootReducer';
import { themes } from '../../utils/theme';

interface withThemeProps {
    theme: any;
    toggleTheme: () => {};
}

const withTheme = <P extends object>(Component: React.ComponentType<P>): React.FC<P & withThemeProps> => (props) => {

    // take "dispatch" function
    const dispatch = useDispatch();

    // take current "theme" from app state in store
    const { theme } = useSelector(
        (state: RootState) => state.app,
    );

    // set theme by dispatching "toggleTheme" action with theme as payload
    // notice we have used "useCallback" to memoize the function
    const toggleTheme = useCallback(
        () => {
            dispatch(setTheme({ theme: theme.$mode === 'dark' ? themes.light : themes.dark }))
        },
        [theme]
    );

    // handle status bar styles
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

    return (
        <Component {...{ theme }} {...{ toggleTheme }} {...props} />
    );
};

export default withTheme;

