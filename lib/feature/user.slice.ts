import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie } from "nextjs-cookie";


type InitialState = {
  userData: {} | undefined,
  loading: boolean,
  error: string | null
}

const initialState: InitialState = {
  userData: undefined,
  loading: true,
  error: null,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
      state.error = null;
    },
    logoutUser: (state) => {
      state.userData = undefined,
      state.error = null,
      state.loading = false
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginUser, setLoading, setError, logoutUser } = userSlice.actions;

export default userSlice.reducer;