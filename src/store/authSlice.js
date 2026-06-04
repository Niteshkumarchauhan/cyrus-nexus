// This slice stores login information for the user.
// It keeps the account data simple for beginner learning.

import { createSlice } from "@reduxjs/toolkit";

const loadUser = () => {
  try {
    const saved = localStorage.getItem("gaming-user");
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: loadUser(),
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    updateProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { loginUser, logoutUser, updateProfile } = authSlice.actions;
export default authSlice.reducer;
