import { configureStore, Reducer } from '@reduxjs/toolkit';

const SET_TOKEN = 'token/set';

type TTokenAction = {
  type: typeof SET_TOKEN;
  payload: string;
};

type TToken = {
  token: string | null;
  isTokenDefined: boolean;
};

export const setToken = (payload: string) => {
  return { type: SET_TOKEN, payload: payload };
};

const tokenInitialState: TToken = {
  token: null,
  isTokenDefined: false,
};

const tokenReducer: Reducer<TToken, TTokenAction> = (
  state = tokenInitialState,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,

        token: action.payload,
        isTokenDefined: !!action.payload,
      };

    default:
      return { ...state };
  }
};

export const serverStore = configureStore({
  reducer: tokenReducer,
});

export type TPreloadedRootState = ReturnType<typeof serverStore.getState>;
