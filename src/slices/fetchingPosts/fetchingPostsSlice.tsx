import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  posts: any[];
  loading: boolean;
  errors: null | string;
}

const initialState: IInitialState = {
  posts: [],
  loading: false,
  errors: null,
};

export const fetchPostsByUser = createAsyncThunk("posts/getPosts", async (data) => {
  const { username, user } = data as any;

  try {
    const response = username
      ? await axios.get(`/posts/profile/${username}`)
      : await axios.get(`/posts/timeline/${user._id}`);

    return response.data;
  } catch (error) {}
});

const fetchPostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsLoading: (state) => {
      state.loading = true;
    },
    postsLoaded: (state) => {
      state.loading = false;
    },
  },
  extraReducers: {
    [fetchPostsByUser.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchPostsByUser.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [fetchPostsByUser.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

export const { postsLoading, postsLoaded } = fetchPostsSlice.actions;

export const postReducer = fetchPostsSlice.reducer;
