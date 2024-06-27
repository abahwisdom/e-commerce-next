'use client';

import React, { PropsWithChildren } from 'react';

import { store, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const StoreProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
  )
};

export default StoreProvider;
