import { configureStore } from '@reduxjs/toolkit';
//import productsReducer from '../redux/slice/productReducer';
 
export const store = configureStore({
  reducer: {
    //products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;