import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices/groupModal/groupModal";
import registrationReducer from "./slices/Auth/registrationSlice";
import { postReducer } from "./slices/fetchingPosts/fetchingPostsSlice";
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
