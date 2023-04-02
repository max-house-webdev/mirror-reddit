import { configureStore } from '@reduxjs/toolkit';

import processEnvReducer from '../features/processEnv/processEnvSlice';
import authReducer from '../features/auth/authSlice';
import requestReducer from '../features/request/requestSlice';
import postListReducer from '../features/postList/postListSlice';
import activePostReducer from './../features/activePost/activePostSlice';

export const store = configureStore({
  reducer: {
    processEnv: processEnvReducer,
    auth: authReducer,
    request: requestReducer,
    postList: postListReducer,
    activePost: activePostReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // because of A non-serializable value was detected in the state
    // state.lastUpdate = new Date();
    // in updatePostList: (state, action)
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
