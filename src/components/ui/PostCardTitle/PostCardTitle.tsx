import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PostCardTitle.scss';

import { setActivePostId } from '../../../features';
import { useAppDispatch } from '../../../hooks';

export interface IPostCardTitleProps {
  title: string;
  postId: string;
  subreddit: string;
  subredditId: string;
}

export function PostCardTitle(props: IPostCardTitleProps) {
  const { title, postId, subreddit, subredditId } = props;

  const dispatch = useAppDispatch();

  const toggleModalPost = () => {
    dispatch(setActivePostId({ postId, subreddit, subredditId }));
  };

  const location = {
    pathname: `../activePost/id/:${postId}`,
  };

  return (
    <h2 className={styles.title}>
      <Link to={location} className={styles.postLink} onClick={toggleModalPost}>
        {title}
      </Link>
    </h2>
  );
}
