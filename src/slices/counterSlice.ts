'use strict';

import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../types';

const initialState: CounterState = {
    count: 0
}

const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        }
    }
});

export const {
    increment
} = counter.actions;

export default counter.reducer;