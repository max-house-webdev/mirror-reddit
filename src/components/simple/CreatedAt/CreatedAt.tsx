import React from 'react';

import styles from './CreatedAt.scss';

export interface ICreatedAtProps {
  createdAt: string;
}

export function CreatedAt({ createdAt }: ICreatedAtProps) {
  const prefix = 'опубликовано';

  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>{prefix}</span>
      {createdAt}
    </span>
  );
}
