// This slice manages the wishlist.
// A user can save products they want to view later.

import { createSlice } from "@reduxjs/toolkit";

const loadWishlist = () => {
  try {
    const saved = localStorage.getItem("gaming-wishlist");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: loadWishlist(),
  },
  reducers: {
    toggleWish: (state, action) => {
      const id = action.payload;
      const exists = state.items.includes(id);
      if (exists) {
        state.items = state.items.filter((itemId) => itemId !== id);
      } else {
        state.items.push(id);
      }
    },
  },
});

export const { toggleWish } = wishlistSlice.actions;
export default wishlistSlice.reducer;
