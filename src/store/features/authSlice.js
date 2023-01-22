import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) ?? null,
    isAuthenticated: JSON.parse(localStorage.getItem("user")) ? true : false,
    loading: false,
  },

  reducers: {
    login(state, { payload }) {
      state.user = payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
    description(state, { payload }) {
      state.user = payload;
      state.isAuthenticated = true;
      const p = JSON.parse(localStorage.getItem("user"));
      const { token } = p;
      const c = { token, user: payload };

      localStorage.setItem(`user`, JSON.stringify(c));
    },
  },
});

export const { login, logout, description } = slice.actions;
export default slice.reducer;
