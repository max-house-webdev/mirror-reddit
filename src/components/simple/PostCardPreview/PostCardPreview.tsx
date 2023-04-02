import React from 'react';

import styles from './PostCardPreview.scss';

export interface IPostCardPreviewProps {
  src: string;
}

export function PostCardPreview(props: IPostCardPreviewProps) {
  const { src } = props;
  return (
    <div className={styles.preview}>
      <img src={src} className={styles.image} alt='preview' />
    </div>
  );
}
