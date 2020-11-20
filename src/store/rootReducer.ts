import { combineReducers } from '@reduxjs/toolkit';

// reducers
import counterReducer from '../slices/counter.slice';
import usersReducer from '../slices/users.slice';

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;