import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../slices/counter.slice';

const rootReducer = combineReducers({
    counter: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;