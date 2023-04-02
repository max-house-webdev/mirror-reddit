import React from 'react';

import styles from './PostCard.scss';

import type { IPost } from '../../../features';
import {
  Dropdown,
  CommentCounter,
  KarmaCounter,
  PostCardContent,
  PostCardPreview,
  ActionButton,
} from '../../../components';

export type TPostCardProps = IPost;

export function PostCard(props: TPostCardProps) {
  const { postId, preview, karmaCounter, commentsCounter } = props;

  const btnShareHandleClick = () => {
    console.log('>> btn share click');
  };

  const btnSaveHandleClick = () => {
    console.log('>> btn save click');
  };

  return (
    <li className={styles.card} data-postid={postId}>
      <Dropdown isOpen={false} />
      <PostCardContent {...props} />
      <PostCardPreview src={preview} />
      <div className={styles.controls}>
        <KarmaCounter karmaCounter={karmaCounter} />
        <CommentCounter commentCounter={commentsCounter} />
        <div className={styles.actions}>
          <ActionButton action={'share'} onClick={btnShareHandleClick} />
          <ActionButton action={'save'} onClick={btnSaveHandleClick} />
        </div>
      </div>
    </li>
  );
}
