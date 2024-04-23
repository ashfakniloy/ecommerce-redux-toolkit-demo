import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cart-slice";
import { productsApi } from "./api/products-api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
