import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registrationService } from "../../services/registrationService";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const loginUser = createAsyncThunk("auth/login", async (userCredential) => {
  const { data } = await registrationService.getRegisteredUser("auth/login", userCredential);
  return data;
});

export const registrationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetching = false;
        state.error = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      });
  },
});

export const { loginStart, loginSuccess, loginFailure, unFollowFromUser } =
  registrationSlice.actions;

export default registrationSlice.reducer;
