import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dialogOpen: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleDialog: (state) => {
      state.dialogOpen = !state.dialogOpen;
    },
  },
});

export const { toggleDialog } = loginSlice.actions;
export default loginSlice.reducer;
