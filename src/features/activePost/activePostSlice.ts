import { createSlice } from '@reduxjs/toolkit';

export type TActivePost = {
  postId: string | null;
  subreddit: string | null;
  subredditId: string | null;
};

const initialState: TActivePost = {
  postId: null,
  subreddit: null,
  subredditId: null,
};

export const activePost = createSlice({
  name: 'activePost',
  initialState,
  reducers: {
    resetActivePostId: (state) => {
      state.postId = null;
      state.subreddit = null;
      state.subredditId = null;
    },

    setActivePostId: (state, action) => {
      state.postId = action.payload.postId;
      state.subreddit = action.payload.subreddit;
      state.subredditId = action.payload.subredditId;
    },
  },
});

export const { resetActivePostId, setActivePostId } = activePost.actions;

export default activePost.reducer;
