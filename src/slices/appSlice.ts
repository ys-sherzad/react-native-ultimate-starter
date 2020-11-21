'use strict';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../types';
import { themes } from '../utils/theme';
import { Appearance } from 'react-native-appearance';

// take system mode preference
const systemTheme = Appearance.getColorScheme();

const getTheme = (mode: 'light' | 'dark' | 'no-preference') => {
    if (mode === 'no-preference') return themes.light;
    return themes.dark;
}

const initialState: AppState = {
    theme: getTheme(systemTheme)
}

const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<{ theme: any }>) {
            const { theme } = action.payload;
            state.theme = theme;
        }
    }
});

export const {
    setTheme,
} = app.actions;

export default app.reducer;