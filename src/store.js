import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./features/groupModal/groupModal";
import registrationReducer from "./features/Auth/registrationSlice";
import { postReducer } from "./features/fetchingPosts/fetchingPostsSlice";
import { groupModalApi } from "./pages/modals/GroupModal/groupModalApi";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    posts: postReducer,
    modal: modalReducer,
    [groupModalApi.reducerPath]: groupModalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(groupModalApi.middleware),
});
