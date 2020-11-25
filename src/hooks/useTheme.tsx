import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../slices/appSlice';
import { RootState } from '../store/rootReducer';
import { themes } from '../utils/theme';

/**
 * A hook returning theme and toggle function
 * for updating / toggling theme state in store
 */

const useTheme = () => {

    const dispatch = useDispatch();

    const { theme } = useSelector(
        (state: RootState) => state.app
    );

    const toggleTheme = useCallback(
        () => {
            dispatch(setTheme({ theme: theme.$mode === 'dark' ? themes.light : themes.dark }))
        },
        [theme]
    );

    return { theme, toggleTheme };
};

export default useTheme;

