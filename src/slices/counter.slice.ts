'use strict';

import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    count: number;
}

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