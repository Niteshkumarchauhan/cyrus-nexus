// This slice stores finished orders.
// It helps the Orders page show the user's purchase history.

import { createSlice } from "@reduxjs/toolkit";

const loadOrders = () => {
  try {
    const saved = localStorage.getItem("gaming-orders");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    list: loadOrders(),
  },
  reducers: {
    placeOrder: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
});

export const { placeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
