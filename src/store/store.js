// This file creates the Redux store for the whole website.
// Redux helps us manage cart, wishlist, auth, and orders in one place.

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import authReducer from "./authSlice";
import ordersReducer from "./ordersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    orders: ordersReducer,
  },
});

// Save Redux state to browser storage so the page remembers data after refresh.
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("gaming-cart", JSON.stringify(state.cart.items));
  localStorage.setItem("gaming-wishlist", JSON.stringify(state.wishlist.items));
  localStorage.setItem("gaming-user", JSON.stringify(state.auth.user));
  localStorage.setItem("gaming-orders", JSON.stringify(state.orders.list));
});

export default store;
