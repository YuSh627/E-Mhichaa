import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../types/types";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  number: localStorage.getItem("number"),
  userId: localStorage.getItem("userId"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        token?: string;
        number?: string;
        userId?: string;
      }>
    ) => {
      if (action.payload.token !== undefined) {
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      }
      if (action.payload.number !== undefined) {
        state.number = action.payload.number;
        localStorage.setItem("number", action.payload.number);
      }
      if (action.payload.userId !== undefined) {
        state.userId = action.payload.userId;
        localStorage.setItem("userId", action.payload.userId);
      }
    },

    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
      state.number = null;
      localStorage.removeItem("number");
      state.userId = null;
      localStorage.removeItem("userId");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
