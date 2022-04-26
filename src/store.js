import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./features/groupModal/groupModal";
import registrationReducer from "./features/Auth/registrationSlice";
import { postReducer } from "./features/fetchingPosts/fetchingPostsSlice";
import { groupModalApi } from "./pages/modals/GroupModal/groupModalApi";

// This approach is useful for generate specific store for tests
export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      registration: registrationReducer,
      posts: postReducer,
      modal: modalReducer,
      [groupModalApi.reducerPath]: groupModalApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(groupModalApi.middleware),
    preloadedState: initialState,
  });
};
