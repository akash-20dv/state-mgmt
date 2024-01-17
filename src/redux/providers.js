'use client';
import React from 'react'
import {Provider} from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const Providers = ({ children }) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          {children} 
        </Provider>
    </PersistGate>
  )
}

export default Providers