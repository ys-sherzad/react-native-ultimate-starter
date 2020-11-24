import { configureStore, Action } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// middleware
import thunk, { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';
// storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// root reducer
import rootReducer, { RootState } from './rootReducer';

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

/**
 * redux-persist configuration
 * check https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27 for other configs
 */
const persistConfig = {
    storage: AsyncStorage,
    timeout: 0,
    key: 'my_app',
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * store configuration
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
    devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);

export default store;