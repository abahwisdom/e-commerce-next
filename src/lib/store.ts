import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from '@/lib/services/api';
import cartReducer from './features/cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const cartPersistConfig = {
  key: 'cart',
  storage,
}

const rootPersistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  [productsApi.reducerPath]: productsApi.reducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PURGE',
          'persist/FLUSH',
          'persist/REGISTER',
        ],
      },
    }).concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;