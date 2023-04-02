import React, { useState } from 'react';

import styles from './Comment.scss';
import {
  ActionButton,
  CommentFormWrapper,
  CommentUser,
  CreatedAt,
} from '../../../components';

export interface ICommentProps {
  id: string;
  author: string;
  avatarSrc: string;
  createdAt: string;
  subreddit: string;
  value: string;
}

export function Comment(props: ICommentProps) {
  const { id, author, avatarSrc, createdAt, subreddit, value } = props;

  const [toBeAnswered, setToBeAnswered] = useState(false);

  const answerHandleClick = () => {
    setToBeAnswered(!toBeAnswered);
  };

  const shareHandleClick = () => {
    console.log('>> Share click >>');
  };

  const complainHandleClick = () => {
    console.log('>> Complain click >>');
  };

  return (
    <li className={styles.item} key={id}>
      <div className={styles.userBlock}>
        <CommentUser name={author} avatar={avatarSrc} link={'#user'} />
        <CreatedAt createdAt={createdAt} />
        <span className={styles.subreddit}>{subreddit}</span>
      </div>
      <p className={styles.p}>{value}</p>
      <div className={styles.buttonContainer}>
        <ActionButton action={'answer'} onClick={answerHandleClick} />
        <ActionButton action={'share'} onClick={shareHandleClick} />
        <ActionButton action={'complain'} onClick={complainHandleClick} />
      </div>
      {toBeAnswered && <CommentFormWrapper />}
    </li>
  );
}
