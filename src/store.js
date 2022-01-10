import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./features/Auth/registrationSlice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});
