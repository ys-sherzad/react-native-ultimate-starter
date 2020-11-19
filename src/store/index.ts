import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// log dispatched actions
import logger from 'redux-logger';
// for persisting store
import { persistReducer, persistStore } from 'redux-persist';
// storage type 
import AsyncStorage from '@react-native-async-storage/async-storage';
// root reducer
import rootReducer, { RootState } from './rootReducer';

const persistConfig = {
    storage: AsyncStorage,
    timeout: 0,
    key: 'my_app',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [logger],
    devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;