import React from 'react';
import {
  AppScrollbar,
  LoadingIndicatorWrapper,
  PostCard,
} from '../../../components';
import { useAppSelector } from '../../../hooks';

import styles from './PostList.scss';

export function PostList() {
  const postListData = useAppSelector((state) => state.postList.data);
  return postListData.length ? (
    <AppScrollbar height={500}>
      <ul className={styles.cardList}>
        {postListData.map((postCardProps) => (
          <PostCard key={postCardProps.postId} {...postCardProps} />
        ))}
      </ul>
    </AppScrollbar>
  ) : (
    <LoadingIndicatorWrapper role={'empty'} data={'empty'} />
  );
}
