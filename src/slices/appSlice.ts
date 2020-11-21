'use strict';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../types';
import { themes } from '../utils/theme';

const initialState: AppState = {
    themeMode: 'light',
    theme: themes.light
}

const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleTheme(state, action: PayloadAction<{ theme: any }>) {
            const { theme } = action.payload;
            state.theme = theme;
        }
    }
});

export const {
    toggleTheme,
} = app.actions;

export default app.reducer;