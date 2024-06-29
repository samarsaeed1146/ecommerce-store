import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./feature/Product";
import cartSlice from "./feature/Cart";
// ...

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
