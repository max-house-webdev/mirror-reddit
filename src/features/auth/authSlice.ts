import { createSlice } from '@reduxjs/toolkit';

export type TUserData = {
  name: string;
  avatar: string | null;
};

export type TAuthState = {
  authUrl: string | null;
  authorized: boolean;
  token: string | null;
  isTokenDefined: boolean;
  userData: TUserData;
};

const initialState: TAuthState = {
  authUrl: null,
  authorized: false,
  token: null,
  isTokenDefined: false,
  userData: {
    name: 'Anonymous',
    avatar: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload.token;
      state.isTokenDefined = action.payload.isTokenDefined;
    },

    saveAuthUrl: (state, action) => {
      state.authUrl = action.payload;
    },

    saveUserData: (state, action) => {
      state.authorized = !!action.payload.name;
      state.userData = { ...action.payload };
    },
  },
});

export const { saveToken, saveAuthUrl, saveUserData } = authSlice.actions;

export default authSlice.reducer;
