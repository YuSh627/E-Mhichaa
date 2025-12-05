import { createSlice } from "@reduxjs/toolkit";
import type { TextFieldVisibility } from "../types/types";

const initialState: TextFieldVisibility = {
  showText: false,
};

export const textFieldVisibilitySlice = createSlice({
  name: "textfieldVisibility",
  initialState,
  reducers: {
    toggleTextfieldVisibility: (state) => {
      state.showText = !state.showText;
    },
  },
});

export const { toggleTextfieldVisibility } = textFieldVisibilitySlice.actions;
export default textFieldVisibilitySlice.reducer;
