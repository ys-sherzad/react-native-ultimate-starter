'use strict';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Theme } from '../types';
import { themes } from '../utils/theme';
import { Appearance } from 'react-native-appearance';

// take system's mode preference
const systemTheme = Appearance.getColorScheme();

// get system theme
const getSystemTheme = (mode: 'light' | 'dark' | 'no-preference') => {
    if (mode === 'no-preference') return themes.light;
    return themes.dark;
}

// set initial state for theme
const initialState: AppState = {
    theme: getSystemTheme(systemTheme)
}

// create slice reducer and action creators
const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<{ theme: Theme }>) {
            const { theme } = action.payload;
            state.theme = theme;
        }
    }
});

export const {
    setTheme,
} = app.actions;

export default app.reducer;