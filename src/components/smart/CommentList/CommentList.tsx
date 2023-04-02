import React from 'react';

import styles from './CommentList.scss';

import { Comment } from '../Comment/Comment';
import { useRecoilValue } from 'recoil';
import { commentListState } from '../../../features';
import { AppScrollbar, LoadingIndicatorWrapper } from '../../../components';

export function CommentList() {
  const commentLst = useRecoilValue(commentListState);

  return commentLst.user.length | commentLst.list.length ? (
    <AppScrollbar height={300}>
      <ul className={styles.commentList}>
        {commentLst.user.length &&
          commentLst.user.map((comment) => {
            return <Comment key={comment.id} {...comment} />;
          })}
        {commentLst.list.length &&
          commentLst.list.map((comment) => {
            return <Comment key={comment.id} {...comment} />;
          })}
        {/* {commentLst.map((comment) => {
          return <Comment key={comment.id} {...comment} />;
        })} */}
      </ul>
    </AppScrollbar>
  ) : (
    <LoadingIndicatorWrapper role={'empty'} data={'empty'} />
  );
}
