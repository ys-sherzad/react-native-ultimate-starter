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

const persistConfig = {
    storage: AsyncStorage,
    timeout: 0,
    key: 'my_app',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
    devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);

export default store;