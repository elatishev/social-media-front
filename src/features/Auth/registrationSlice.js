import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const registrationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, { payload }) => {
      state.user = payload;
      state.isFetching = false;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
  extraReducers: {},
});

export const { loginStart, loginSuccess, loginFailure, unFollowFromUser } =
  registrationSlice.actions;

export default registrationSlice.reducer;
