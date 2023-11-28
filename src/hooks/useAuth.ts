import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';

import { store } from '../store';

import { saveProcessEnv, saveAuthUrl, concatAuthUrl } from '../features';
import { fetchUserData } from '../services/fetchUserData';

export function useAuth() {
  const dispatch = useAppDispatch();
  const { isTokenDefined, token, authUrl } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const isAuthUrlDefined = !!authUrl;

    if (!isAuthUrlDefined) {
      dispatch(saveProcessEnv());
      const { client_id, redirect_uri } = store.getState().processEnv;
      dispatch(saveAuthUrl(concatAuthUrl({ client_id, redirect_uri })));
    }

    if (isTokenDefined && token) {
      fetchUserData({ token });
    }
  }, [authUrl, dispatch, isTokenDefined, token]);
}
