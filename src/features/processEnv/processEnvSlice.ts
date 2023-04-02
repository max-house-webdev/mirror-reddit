import { createSlice } from '@reduxjs/toolkit';

export type TProcessEnvState = {
  client_id: string | null;
  redirect_uri: string | null;
};

const initialState: TProcessEnvState = {
  client_id: null,
  redirect_uri: null,
};

export const processEnv = createSlice({
  name: 'processEnv',
  initialState,
  reducers: {
    saveProcessEnv: (state) => {
      (state.client_id = process.env.CLIENT_ID ? process.env.CLIENT_ID : null),
        (state.redirect_uri = process.env.REDIRECT_URI
          ? process.env.REDIRECT_URI
          : null);
    },
  },
});

export const { saveProcessEnv } = processEnv.actions;

export default processEnv.reducer;
