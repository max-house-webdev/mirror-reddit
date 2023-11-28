import { createSlice } from '@reduxjs/toolkit';

import type { IPost } from './interface';

export type TPostListSate = {
  data: IPost[];
  limit: number;
  after: string | null;
  updated: boolean;
  lastUpdate: Date | null;
};

const initialState: TPostListSate = {
  data: [],
  limit: 2,
  after: null,
  updated: false,
  lastUpdate: null,
};

export const postList = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    resetPostList: (state) => {
      state.after = initialState.after;
      state.data.length = 0;
      state.lastUpdate = initialState.lastUpdate;
    },

    updatePostList: (state, action) => {
      const payload = action.payload as TPostListSate;
      const { limit, after, data } = payload;

      state.limit = limit;
      state.after = after;
      state.updated = true;
      state.lastUpdate = new Date();

      state.data = [...state.data, ...data];
    },

    shouldUpdatePostList: (state) => {
      state.updated = false;
    },

    setLimitPostList: (state, action) => {
      const payload = action.payload as TPostListSate;
      const { limit } = payload;

      state.limit = limit;
    },
  },
});

export const {
  updatePostList,
  setLimitPostList,
  shouldUpdatePostList,
  resetPostList,
} = postList.actions;

export default postList.reducer;
