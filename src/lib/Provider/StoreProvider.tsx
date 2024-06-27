'use client';

import React, { PropsWithChildren } from 'react';
import { store, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { GiftFilled } from '@ant-design/icons';


const StoreProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor} 
        loading={
          <div className="text-center flex flex-col gap-4 justify-center items-center w-full" style={{height:'100vh'}}>
          <GiftFilled style={{fontSize:'60px', color:"#62595929"}} className='animate-pulse' />
        </div>
        }>
          {children}
        </PersistGate>
      </Provider>
  )
};

export default StoreProvider;
