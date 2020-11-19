import { configureStore, combineReducers, Dispatch, MiddlewareAPI, getDefaultMiddleware } from '@reduxjs/toolkit';
// log dispatched actions
import logger from 'redux-logger';
// for persisting state
import { persistReducer, persistStore } from 'redux-persist';
// storage type 
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    storage: AsyncStorage,
    timeout: 0,
    key: 'my_app',
};

const reducers = {

}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);