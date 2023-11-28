import React from 'react';

import styles from './LoadingIndicator.scss';

export interface ILoadingIndicatorProps {
  src: string;
  alt: string;
  message: string;
}

export function LoadingIndicator(props: ILoadingIndicatorProps) {
  const { src, alt, message } = props;

  return (
    <div className={styles.container}>
      <img src={src} alt={alt} className={styles.img} />
      <p className={styles.message}>{message}</p>
    </div>
  );
}
