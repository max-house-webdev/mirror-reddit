import { useEffect, useCallback } from 'react';

import { useAppSelector } from '../hooks';
import { fetchPostListData } from '../services';

export function usePostListData() {
  const { isTokenDefined, token } = useAppSelector((state) => state.auth);
  const { updated, limit, after } = useAppSelector((state) => state.postList);

  const fetchData = useCallback(() => {
    if (!token || !isTokenDefined || updated) return;
    fetchPostListData({
      token,
      limit,
      after,
    });
  }, [after, isTokenDefined, limit, token, updated]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return fetchData;
}
