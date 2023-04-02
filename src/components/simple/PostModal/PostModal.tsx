import React from 'react';

import styles from './PostModal.scss';

export interface IPostModalProps {
  title: string;
  description: string;
  preview: string;
}

export function PostModal(props: IPostModalProps) {
  const { title, description, preview } = props;
  return (
    <>
      <h2>{title}</h2>
      <p className={styles.content}>{description}</p>
      <img src={preview} className={styles.img} alt='post image'></img>
    </>
  );
}
