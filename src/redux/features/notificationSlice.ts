import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { SnackbarState } from "../types/types";

const initialState: SnackbarState = {
  open: false,
  message: "",
  severity: "info",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (
      state,
      action: PayloadAction<Omit<SnackbarState, "open">>
    ) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },

    hideSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
