import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./feature/Product";
import cartSlice from "./feature/Cart";
import storage from "redux-persist/lib/storage";
import { persistCombineReducers, persistReducer } from "redux-persist";

// ...

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
