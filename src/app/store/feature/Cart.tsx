import { Cart } from "@/app/utils/Type";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to cart Functionality
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newObj = {...action.payload, uuid}
      state.push(newObj);
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
