import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./features/Auth/registrationSlice";
import { postReducer } from "./features/fetchingPosts/fetchingPostsSlice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    posts: postReducer,
  },
});
