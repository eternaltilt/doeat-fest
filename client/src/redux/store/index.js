import { logger } from 'redux-logger/src';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});
