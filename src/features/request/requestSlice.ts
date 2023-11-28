import { createSlice } from '@reduxjs/toolkit';

export type TRequestStatus = 'idle' | 'pending' | 'success' | 'failed';
export type TRequestData = 'posts' | 'comments' | 'user data' | null;

export type TRequest = {
  status: TRequestStatus;
  data: TRequestData;
  error: string;
};

const initialState: TRequest = {
  status: 'idle',
  data: null,
  error: 'no error',
};

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    resetRequestStatus: (state) => {
      state.status = initialState.status;
      state.error = initialState.error;
    },

    sendRequest: (state, action) => {
      state.status = 'pending';
      state.data = action.payload as TRequestData;
    },

    requestSuccess: (state) => {
      state.status = 'success';
      state.error = 'no error';
    },

    requestFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  resetRequestStatus,
  sendRequest,
  requestSuccess,
  requestFailed,
} = requestSlice.actions;

export default requestSlice.reducer;
