import { combineReducers } from '@reduxjs/toolkit';

// import all reducers
import counterReducer from '../slices/counterSlice';
import usersReducer from '../slices/usersSlice';
import appReducer from '../slices/appSlice';

// combine all reducers in to single state object
const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    app: appReducer
});

// export root reducer's state type
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;