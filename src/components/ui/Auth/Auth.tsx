import React from 'react';

import styles from './Auth.scss';

import { Break, Text } from '../../../../utils/components';

import IconAnon from '../../../assets/svg/avatarAnon.svg';
import { localImgAvatar } from '../../../assets/img';

export interface IAuthProps {
  authUrl: string;
  userName: string;
  userAvatar: string | null;
}

export function Auth(props: IAuthProps) {
  const { authUrl, userName, userAvatar } = props;

  return (
    <div className={styles.block}>
      <a href={authUrl} className={styles.link}>
        <div className={styles.userAvatarContainer}>
          {userAvatar ? (
            <img
              // todo
              // to load image from reddit use next line
              // src={userAvatar}
              // todo
              // if Failed to load resource: the server responded with a status of 403 ()
              // use next line to load local image
              src={localImgAvatar}
              alt='user avatar'
              className={styles.avatarImage}
            />
          ) : (
            <IconAnon />
          )}
        </div>
        <div className={styles.userNameContainer}>
          <Break size={12} />
          <Text fontSize={12}>{userName}</Text>
        </div>
      </a>
    </div>
  );
}
