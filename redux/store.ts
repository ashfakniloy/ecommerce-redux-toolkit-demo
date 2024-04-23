import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // [productsApi.reducerPath]: productsApi.reducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({}).concat([productsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
