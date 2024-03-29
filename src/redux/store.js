'use client';
import {configureStore} from '@reduxjs/toolkit';
import  counterReducer  from './CountSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, counterReducer)  
export const store = configureStore({
    reducer: {
        counter: persistedReducer,

    },
})
export const persistor = persistStore(store)