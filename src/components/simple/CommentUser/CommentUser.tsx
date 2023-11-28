import React from 'react';

import styles from './CommentUser.scss';
import { IconAnon } from '../../../assets/svg';
import { isImage } from '../../../../utils/functions/isImage';

export interface ICommentUserProps {
  avatar: string;
  link: string;
  name: string;
}

export function CommentUser(props: ICommentUserProps) {
  const { avatar, link, name } = props;

  return (
    <div className={styles.userLink}>
      {isImage(avatar) ? (
        <img src={avatar} className={styles.avatar} alt='avatar' />
      ) : (
        <IconAnon />
      )}

      <a href={link} className={styles.userName}>
        {name}
      </a>
    </div>
  );
}
