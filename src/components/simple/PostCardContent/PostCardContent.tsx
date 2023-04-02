import React from 'react';
import { isImage } from '../../../../utils/functions/isImage';
import { IconAnon } from '../../../assets/svg';
import { CreatedAt, PostCardTitle } from '../../../components';

import styles from './PostCardContent.scss';

export interface IPostCardContentProps {
  postId: string;
  title: string;
  authorName: string;
  authorAvatar: string;
  authorLink: string;
  url: string;
  createdAt: string;
  subreddit: string;
  subredditId: string;
}

export function PostCardContent(props: IPostCardContentProps) {
  const {
    postId,
    title,
    authorName,
    authorAvatar,
    authorLink,
    url,
    createdAt,
    subreddit,
    subredditId,
  } = props;

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        {/* author block */}
        <div className={styles.userLink}>
          {/* user author image */}
          {isImage(authorAvatar) ? (
            <img src={authorAvatar} className={styles.avatar} alt='avatar' />
          ) : (
            <IconAnon />
          )}
          {/* link to post */}
          <a href={url || authorLink} className={styles.username}>
            {authorName}
          </a>
        </div>
        {/* date post was created */}
        <CreatedAt createdAt={createdAt} />
      </div>
      <PostCardTitle
        title={title}
        postId={postId}
        subreddit={subreddit}
        subredditId={subredditId}
      />
    </div>
  );
}
