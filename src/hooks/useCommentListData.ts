import { useEffect, useCallback } from 'react';

import { useAppSelector } from '../hooks';
import { fetchCommentListData } from '../services';
import { useRecoilState } from 'recoil';
import { commentListState } from '../features';

export function useCommentListData() {
  const { isTokenDefined, token } = useAppSelector((state) => state.auth);
  const { postId, subreddit } = useAppSelector((state) => state.activePost);

  const [commentList, setCommentList] = useRecoilState(commentListState);

  const fetchData = useCallback(() => {
    if (!token || !isTokenDefined || !postId || !subreddit) return;

    fetchCommentListData({
      token,
      postId,
      subreddit,
    }).then((comments) => {
      if (!comments?.length) {
        return;
      }

      setCommentList({ user: commentList.user, list: comments });
    });
  }, [isTokenDefined, postId, setCommentList, subreddit, token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return fetchData;
}
