'use strict';

import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../types';

// set the initial state for counter
const initialState: CounterState = {
    count: 0
}

// create "counter" slice reducer and its action creators
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