import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //it takes a configuartions,
  //1.the first configuration is :let's give name called cart
  name: "cart",
  //the second configuration is initialState
  initialState: {
    items: ["pizza","burger"],
  },
  reducers: {
    //this is the reducer function ,it gets two parameter state and action , and now it will modify our state based on action
    addItem: (state, action) => {
        //NOTE: we are mutating the stae here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    claerCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, claerCart } = cartSlice.actions;

export default cartSlice.reducer;
